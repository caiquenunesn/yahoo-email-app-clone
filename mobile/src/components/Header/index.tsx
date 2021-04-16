import React, { useRef } from 'react';
import { Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { Text, View, Dimensions, Animated } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { 
    Container,
    Avatar,
    OnlineStatus,
    RightSide,
    Button,
    Wrapper,
} from './styles';
import TextAnimatedHeader from '../TextAnimatedHeader';
import { NavigationActions } from 'react-navigation';

interface Anim {
    animWrapper: Animated.Value;
    header_Height: Animated.AnimatedInterpolation;
    title: string;
    description: string;
    children?: JSX.Element;
}

const { width, height } = Dimensions.get('window');

const MAX_HEIGHT = height / 4;

export default ({ animWrapper, header_Height, title, description, children }: Anim) => {

    const MinHeader: React.FC = () => {
          return(
            <Animated.View
            style={{
                  position: 'absolute',      
                }}>
              <TextAnimatedHeader title={title} description={description} {...{ animWrapper }} />
             </Animated.View>
          );
      }

      const handleToggleDrawer = ({ navigation }) => {
          navigation.navigate('openDrawer');
      };

    return (
      <Animated.View style={{backgroundColor: '#10100a',
      paddingTop: 20,
      paddingLeft: 20,
      width: '100%',
      zIndex: 10,
      height: header_Height,
      position: 'absolute'
      }}>
          <Wrapper>

          <Avatar onPress={handleToggleDrawer}>
          </Avatar>

            <RightSide>
                <Button>
                    <Feather
                        name="folder-plus"
                        size={26}
                        color={colors.black}
                        />
                </Button>

                <Button>
                    <FontAwesome
                        name="pencil"
                        size={26}
                        color={colors.black}
                        />
                </Button>

                <Button>
                    <Feather
                        name="search"
                        size={26}
                        color={colors.black}
                        />
                </Button>
            </RightSide>
            </Wrapper>
            <MinHeader/>
            {children}
      </Animated.View>
  );
}