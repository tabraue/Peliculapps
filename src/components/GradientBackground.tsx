import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {currColors, prevColors, setPreviousColors} =
    useContext(GradientContext);

  const {fadeIn, fadeOut, opacity} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPreviousColors(currColors);
      fadeOut()
    });
  }, [currColors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[
          prevColors.dominant,
          prevColors.average,
          prevColors.lightVibrant,
        ]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.4, y: 0.8}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[
            currColors.dominant,
            currColors.average,
            currColors.lightVibrant,
          ]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.4, y: 0.8}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
//
