import React from 'react';
import { View, Dimensions, Animated } from 'react-native';
import { Extrapolate } from 'react-native-reanimated';

interface Props {
    animWrapper: Animated.Value;
    title: string;
    description: string;
}

const { width, height } = Dimensions.get('window');

export default ({ title, description , animWrapper }: Props) => {

      const heightY = animWrapper.interpolate({
        inputRange: [0, 70],
        outputRange: [90, 40],
        extrapolate: Extrapolate.CLAMP
      })
      const marginL = animWrapper.interpolate({
          inputRange: [0, 70],
          outputRange: [20, 70],
          extrapolateRight: Extrapolate.CLAMP
      })
      const opacityL = animWrapper.interpolate({
          inputRange: [0, 70],
          outputRange: [0.8, 0],
      })
      const FontSiz = animWrapper.interpolate({
          inputRange: [0, 70],
          outputRange: [28, 24],
          extrapolate: Extrapolate.CLAMP
      })

      


    return(
        

        <Animated.View
            style={[{transform: [{translateY: heightY}] , marginLeft: marginL}]}>
            <Animated.Text style={{color: '#fff', fontSize: FontSiz, fontWeight: "bold"}}>{title}</Animated.Text>
              <View style={{flexDirection: 'row'}}>
            <Animated.Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 14, opacity: opacityL,}}>{description}</Animated.Text>
                  </View>
              </Animated.View>
    );
};