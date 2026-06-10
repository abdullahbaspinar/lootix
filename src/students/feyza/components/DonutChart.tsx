import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

type Segment = {
  label: string;
  percent: number;
  color: string;
};

type DonutChartProps = {
  segments: Segment[];
};

export function DonutChart({segments}: DonutChartProps) {
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <View style={styles.hole}>
          <Text style={styles.centerText}>Dağılım</Text>
        </View>
        <View style={[styles.segment, styles.seg1]} />
        <View style={[styles.segment, styles.seg2]} />
        <View style={[styles.segment, styles.seg3]} />
      </View>
      <View style={styles.legend}>
        {segments.map(seg => (
          <View key={seg.label} style={styles.legendItem}>
            <View style={[styles.dot, {backgroundColor: seg.color}]} />
            <Text style={styles.legendLabel}>
              {seg.label} ({seg.percent}%)
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingVertical: 16,
  },
  ring: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  hole: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  centerText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  segment: {
    position: 'absolute',
    width: '50%',
    height: '50%',
  },
  seg1: {
    top: 0,
    right: 0,
    backgroundColor: '#B71C1C',
  },
  seg2: {
    bottom: 0,
    right: 0,
    backgroundColor: '#E53935',
  },
  seg3: {
    bottom: 0,
    left: 0,
    backgroundColor: '#EF5350',
  },
  legend: {
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendLabel: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },
});
