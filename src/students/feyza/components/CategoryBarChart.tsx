import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

type BarItem = {
  label: string;
  percent: number;
};

type CategoryBarChartProps = {
  items: BarItem[];
};

export function CategoryBarChart({items}: CategoryBarChartProps) {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.label} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <View style={styles.barTrack}>
            <View
              style={[styles.bar, {width: `${item.percent}%`}]}
            />
          </View>
          <Text style={styles.percent}>%{item.percent}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    width: 80,
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  barTrack: {
    flex: 1,
    height: 12,
    backgroundColor: colors.border,
    borderRadius: 6,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  percent: {
    width: 36,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'right',
  },
});
