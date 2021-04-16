import React, { useMemo, useRef, useState } from 'react';
import { Easing, Extrapolate, interpolate } from 'react-native-reanimated';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import { Dimensions, Platform, SafeAreaView, Text, View, Animated} from 'react-native';
import EmailList from '../../components/Emails';


interface ItemProps {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const headerHeight = 70 * 2
export const animWrapper = new Animated.Value(0);
const Inbox: React.FC = () => {
  const reference = useRef(null);
  const { diffClamp } = Animated;
  
  const { data, indeces }  = useMemo(() => {
    const items: ItemProps[] = [
          // {
          //   key: 'PAGE_TiTLE',
          //   render: () => <Title>Entradas</Title>,
          //   isTitle: true
          // },
          {
            key: 'PAGE_HEADING',
            render: () => <Heading>HOJE</Heading>,
            isTitle: true
          },
          {key: 'C1', render: () => <EmailList/>},
          
          {
            key: 'FOLLOWED_CATTEGORIES',
            render: () => <Heading>Ontem</Heading>,
            isTitle: true
          },
          {key: 'C2', render: () => <EmailList />},
          
        ];
    
        const indeces: number[] = [];
        
        items.forEach((item, index) => item.isTitle && indeces.push(index));
        
        return {
          data: items,
          indeces,
        }
      }, [])

      const y = useRef(new Animated.Value(0));
      
      const onScroll = Animated.event(
        [
          {
          nativeEvent: {
            contentOffset: { y: y.current }
          }
        }
      ],
      {
        useNativeDriver: true,
        listener: event => {
          animWrapper.setValue(event.nativeEvent.contentOffset.y);
        }
      }
        )
      // const scrollY = diffClamp(y.current, 0, headerHeight);
      // const scrollY = diffClamp(animText, 0, headerHeight);
      // const header_Height = scrollY.interpolate({
      //   inputRange: [0,headerHeight],
      //   outputRange: [0,-(headerHeight/2)],
      //   extrapolate: Extrapolate.CLAMP
      // })

      const header_Height = animWrapper.interpolate({
        inputRange: [0,headerHeight/2],
        outputRange: [headerHeight + 20, headerHeight / 1.5],
        extrapolate: Extrapolate.CLAMP
      })
      
      const TranslateValue = useRef();

      header_Height.addListener(({ value }) => {TranslateValue.current = value})
      
      const handleSnap = ({nativeEvent}) => {
        const offsetY = nativeEvent.contentOffset.y;
        if (
          !(
            TranslateValue.current === headerHeight ||
            TranslateValue.current === headerHeight / 1.5
          )
        ) {
          if (reference.current) {
            reference.current.scrollToOffset({
              offset:
                TranslateValue.current <= 120
                    ? offsetY + headerHeight / 3
                    : offsetY - headerHeight / 3,
            });
          }
        }
      };
        

      return(
        <SafeAreaView>
          <View>
          <Header title='Inbox' description='2321 Entradas º teste.teste@yahoo.com' {...{ header_Height, animWrapper }}/>
          
          <Animated.FlatList<ItemProps>
            style={{ paddingTop: header_Height }}
            ref={reference}
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
            
            </View>
          </SafeAreaView>
    );
}

export default Inbox;