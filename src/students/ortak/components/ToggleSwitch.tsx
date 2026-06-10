import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors} from '../constants/colors';

type ToggleSwitchProps = {
  value: boolean;
  onToggle: () => void;
  activeColor?: string;
};

export function ToggleSwitch({
  value,
  onToggle,
  activeColor = colors.toggleOn,
}: ToggleSwitchProps) {
  return (
    <Pressable
      style={[
        styles.track,
        {backgroundColor: value ? activeColor : colors.toggleOff},
      ]}
      onPress={onToggle}>
      <View style={[styles.thumb, value && styles.thumbOn]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  thumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
});
