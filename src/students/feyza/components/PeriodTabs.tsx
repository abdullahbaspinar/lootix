import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly';

type PeriodTabsProps = {
  active: Period;
  onChange: (period: Period) => void;
};

const PERIODS: {key: Period; label: string}[] = [
  {key: 'daily', label: 'Günlük'},
  {key: 'weekly', label: 'Haftalık'},
  {key: 'monthly', label: 'Aylık'},
  {key: 'yearly', label: 'Yıllık'},
];

export function PeriodTabs({active, onChange}: PeriodTabsProps) {
  return (
    <View style={styles.container}>
      {PERIODS.map(period => {
        const isActive = period.key === active;
        return (
          <Pressable
            key={period.key}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onChange(period.key)}>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {period.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.card,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.card,
  },
});
