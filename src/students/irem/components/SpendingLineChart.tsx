import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const CHART_DATA = [30, 55, 40, 70, 45, 80, 60];
const DAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

export function SpendingLineChart() {
  const max = Math.max(...CHART_DATA);
  const chartHeight = 100;

  return (
    <View style={styles.container}>
      <View style={styles.chartArea}>
        {CHART_DATA.map((value, index) => {
          const barHeight = (value / max) * chartHeight;
          return (
            <View key={index} style={styles.barColumn}>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.bar,
                    {height: barHeight},
                    index === CHART_DATA.length - 2 && styles.barHighlight,
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.labels}>
        {DAYS.map(day => (
          <Text key={day} style={styles.dayLabel}>
            {day}
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
  chartArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 110,
    paddingHorizontal: 4,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
  },
  barTrack: {
    height: 100,
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  bar: {
    width: 8,
    backgroundColor: colors.chartLine,
    borderRadius: 4,
    opacity: 0.6,
  },
  barHighlight: {
    opacity: 1,
    width: 10,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 2,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    color: colors.textSecondary,
  },
});
