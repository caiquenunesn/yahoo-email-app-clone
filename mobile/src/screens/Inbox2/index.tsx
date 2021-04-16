import React, {useMemo, useRef, useState} from 'react';
import Emails from '../../components/Emails';
import Header from '../../components/Header';
import { Animated, Text ,View, Dimensions } from 'react-native';
import { interpolate as Inte } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {
    Container,
    Label,
    ButtonTabs,
    ButtonTabs2,
    TextTabs,
    TextTabs2,
    ButtonTabs3,
    TextTabs3
} from './styles';
import { ScrollView, RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface ItemProps {
    key: string;
    render: () => JSX.Element;
    isTitle?: boolean;
}

const heightHeader = 70 * 2;
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const initialLayout = { width: Dimensions.get('window').width };
        
export default () => {
    const reference = useRef(null);
    const [index, setIndex] = useState(0);
    const y = useRef(new Animated.Value(0));
    const y2 = useRef(new Animated.Value(0));
    const y3 = useRef(new Animated.Value(0));
    const animWrapper = new Animated.Value(0);
    const animWrapper2 = new Animated.Value(0);
    const animWrapper3 = new Animated.Value(0);
    const onScroll = Animated.event([
        {
            nativeEvent: {
                contentOffset: { y: y.current }
            }
        },
    ],
    {
        useNativeDriver: true,
        listener: (event) => animWrapper.setValue(event.nativeEvent.contentOffset.y)
    }
    )
    const onScroll2 = Animated.event([
        {
            nativeEvent: {
                contentOffset: { y: y2.current }
            }
        },
    ],
    {
        useNativeDriver: true,
        listener: (event) => animWrapper2.setValue(event.nativeEvent.contentOffset.y)
    }
    )
    const onScroll3 = Animated.event([
        {
            nativeEvent: {
                contentOffset: { y: y3.current}
            }
        },
    ],
    {
        useNativeDriver: true,
        listener: (event) => animWrapper3.setValue(event.nativeEvent.contentOffset.y)
    }
    )
    
    const header_Height = animWrapper.interpolate({
        inputRange: [0,heightHeader/2],
        outputRange: [heightHeader + 50,heightHeader / 1.2],
        extrapolate: 'clamp'
    })

    const WrapperAnimatedTabs = animWrapper.interpolate({
        inputRange: [0,heightHeader / 2],
        outputRange: [heightHeader / 2 + 80,80],
        extrapolate: 'clamp'
    })

    const {data, indeces} = useMemo(() => {
        const items: ItemProps[] = [
        {
            key: 'Page',
            render: () => (
                <View style={{backgroundColor: '#181b18', height: 40, justifyContent: 'center'}}>
                    <Text style={{color: '#fff', opacity: 0.7,fontSize: 16, fontWeight: 'bold',marginLeft: 16}}>Esté Mês</Text>
                </View>
            ),
            isTitle: true,
        },
        {key: 'C1',render: () => <Emails />}
    ];
    const indeces: number[] = [];

    items.forEach((item, index) => item.isTitle && indeces.push(index));

    return{
        data: items,
        indeces,
      }
    }, [])
    const TransNumber = useRef(null);

    header_Height.addListener(({ value }) => TransNumber.current = value)

    function handleSnap(e){
        const offSet = e.nativeEvent.contentOffset.y
        if(!(TransNumber.current === heightHeader || TransNumber.current === heightHeader / 1.2)){
            if(reference.current){
                reference.current.scrollToOffset({
                    offset: TransNumber.current <= 150
                    ? offSet + heightHeader / 2
                    : offSet - heightHeader / 2
                })
            }
        }
    }

    const Arquivos = () => (
        <Animated.FlatList<ItemProps>
                ref={reference}
                style={{ paddingTop: header_Height }}
                scrollEventThrottle={16}
                data={data}
                renderItem={({ item }) => item.render()}
                onRefresh={() => {}}
                refreshing={false}
                keyExtractor={(item) => item.key}
                stickyHeaderIndices={indeces}
                onMomentumScrollEnd={handleSnap}
                {...{ onScroll }}
                />
                )
    const Fotos = () => (
        <Animated.FlatList<ItemProps>
                style={{ paddingTop: header_Height, }}
                scrollEventThrottle={16}
                data={data}
                renderItem={({ item }) => item.render()}
                onRefresh={() => {}}
                refreshing={false}
                keyExtractor={(item) => item.key}
                stickyHeaderIndices={indeces}
              />
    )
    const Email = () => (
        <Animated.FlatList<ItemProps>
            style={{ paddingTop: header_Height }}
                scrollEventThrottle={16}
                data={data}
                renderItem={({ item }) => item.render()}
                onRefresh={() => {}}
                refreshing={false}
                keyExtractor={(item) => item.key}
                stickyHeaderIndices={indeces}
                />
    )

    const Tabs = (props) => {
        const { navigationState, navigation, position } = props;
                const f = Number(navigationState.index === index)
        return(
            <>
            <Animated.View style={{flexDirection: 'row', padding: 6, position: 'absolute', zIndex: 11, transform: [{translateY: WrapperAnimatedTabs}]}}>
            {navigationState.routes.map((route, index) => {
                const TabON = Number(navigationState.index === index)
                return(
                    <View key={index} style={{ borderBottomWidth: 1, borderColor: TabON ? '#fff' : '#10100a' }}>
                        <TouchableOpacity style={{ height: 30, width: 80, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate(route.routeName)}>
                            <Text style={{color: 'white', fontSize: 16}}>{route.routeName}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            )}
        </Animated.View>
            <Header title="Arquivos" description="Arquivos enviados e recebidos" {...{ header_Height, animWrapper }}/>
        </>
        )
}
    
    const TabTop = createMaterialTopTabNavigator({
        Arquivos: {
            screen: Arquivos,
        },
        Fotos: {
            screen: Fotos,
        },
        Email: {
            screen: Email,
        }
    },
    {
        tabBarComponent: Tabs
    }
    )
    
    const NaviTop = createAppContainer(TabTop);
    return(
            <>
                {/* <Header title="Arquivos" description="Arquivos enviados e recebidos" {...{ header_Height, animWrapper }}/> */}

                <NaviTop />
            </>
    );
}