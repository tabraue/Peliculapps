import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={{ flex: 1}}>
        <LinearGradient
          colors={['#084F6A', '#75C', 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{x: 0.1, y: 0.1}} end={{x: 0.4, y: 0.8}}
        />
        {children}
    </View>
  );
};

export default GradientBackground;
//