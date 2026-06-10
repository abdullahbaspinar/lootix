import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../constants/colors';

type PaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function PaginationDots({total, activeIndex}: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({length: total}).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginVertical: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 24,
  },
  inactiveDot: {
    backgroundColor: colors.border,
  },
});
