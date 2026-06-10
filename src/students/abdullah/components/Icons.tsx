import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SIGN_IN_ASSETS} from '../constants/signInAssets';
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

export function MailIcon({size = 22}: IconProps) {
  return (
    <Image
      source={SIGN_IN_ASSETS.mail}
      style={{width: size, height: size}}
      resizeMode="contain"
    />
  );
}

export function LockIcon({size = 22}: IconProps) {
  return (
    <Image
      source={SIGN_IN_ASSETS.password}
      style={{width: size, height: size}}
      resizeMode="contain"
    />
  );
}

export function UserIcon({size = 22}: IconProps) {
  return (
    <Image
      source={SIGN_IN_ASSETS.person}
      style={{width: size, height: size}}
      resizeMode="contain"
    />
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
