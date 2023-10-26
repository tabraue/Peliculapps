import React from 'react';
import {Animated, Button, View} from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <Animated.View
        style={{
          backgroundColor: 'powderblue',
          width: 150,
          height: 150,
          borderColor: 'pink',
          borderWidth: 10,
          opacity,
          marginBottom: 10
        }}
      />
      <Button title='Fade In' onPress={() => fadeIn}/>
      <Button title='Fade Out' onPress={fadeOut}/>
    </View>
  );
};

export default FadeScreen;
