import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const DATA = [20, 35, 28, 45, 38, 55, 42, 60, 48, 70, 55, 65];
const LABELS = ['1', '5', '10', '15', '20', '25', '30'];

export function MonthlyLineChart() {
  const max = Math.max(...DATA);
  const height = 120;

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {DATA.map((value, index) => {
          const barH = (value / max) * height;
          return (
            <View key={index} style={styles.column}>
              <View style={styles.barTrack}>
                <View style={[styles.bar, {height: barH}]} />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.labels}>
        {LABELS.map(label => (
          <Text key={label} style={styles.label}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 130,
    paddingHorizontal: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  barTrack: {
    height: 120,
    justifyContent: 'flex-end',
  },
  bar: {
    width: 6,
    backgroundColor: colors.chartLine,
    borderRadius: 3,
    opacity: 0.75,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  label: {
    fontSize: 11,
    color: colors.textSecondary,
  },
});
