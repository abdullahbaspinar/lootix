import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {colors} from '../constants/colors';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        (disabled || loading) && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={colors.background} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});
