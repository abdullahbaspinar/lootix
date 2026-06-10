import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';

type AnalysisMenuItemProps = {
  title: string;
  onPress: () => void;
};

export function AnalysisMenuItem({title, onPress}: AnalysisMenuItemProps) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 20,
  },
  arrow: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '300',
    marginLeft: 8,
  },
});
