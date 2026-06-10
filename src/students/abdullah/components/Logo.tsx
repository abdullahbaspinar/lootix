import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
};

const SIZES = {
  small: 80,
  medium: 120,
  large: 160,
};

export function Logo({size = 'medium', style}: LogoProps) {
  const dimension = SIZES[size];

  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: dimension, height: dimension}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
