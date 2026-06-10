import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export function SecondaryButton({title, onPress, style}: SecondaryButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.background,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
