import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

type IconProps = {
  size?: number;
  color?: string;
};

export function BackIcon({size = 24, color = colors.text}: IconProps) {
  return (
    <Text style={{fontSize: size, color, fontWeight: '300'}}>←</Text>
  );
}

export function MailIcon({size = 20, color = colors.placeholder}: IconProps) {
  return (
    <Text style={{fontSize: size, color}}>✉</Text>
  );
}

export function LockIcon({size = 20, color = colors.placeholder}: IconProps) {
  return (
    <Text style={{fontSize: size, color}}>🔒</Text>
  );
}

export function UserIcon({size = 20, color = colors.placeholder}: IconProps) {
  return (
    <Text style={{fontSize: size, color}}>👤</Text>
  );
}

export function EyeIcon({
  size = 20,
  color = colors.placeholder,
  visible = false,
}: IconProps & {visible?: boolean}) {
  return (
    <Text style={{fontSize: size, color}}>{visible ? '👁' : '👁‍🗨'}</Text>
  );
}

export function CheckIcon({size = 48}: {size?: number}) {
  return (
    <View style={[styles.checkCircle, {width: size * 2, height: size * 2, borderRadius: size}]}>
      <Text style={[styles.checkMark, {fontSize: size}]}>✓</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkCircle: {
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: colors.background,
    fontWeight: '700',
  },
});
