import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

type CheckboxProps = {
  checked: boolean;
  onToggle: () => void;
  label: string;
  compact?: boolean;
};

export function Checkbox({checked, onToggle, label, compact}: CheckboxProps) {
  return (
    <Pressable
      style={[styles.container, compact && styles.compact]}
      onPress={onToggle}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Text style={styles.check}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 10,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.checkboxBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  check: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '700',
  },
  label: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  compact: {
    paddingHorizontal: 24,
    marginBottom: 0,
    flex: 1,
  },
});
