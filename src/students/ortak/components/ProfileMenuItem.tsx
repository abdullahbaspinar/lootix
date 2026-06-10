import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';

type ProfileMenuItemProps = {
  title: string;
  onPress: () => void;
  danger?: boolean;
};

export function ProfileMenuItem({
  title,
  onPress,
  danger = false,
}: ProfileMenuItemProps) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={[styles.title, danger && styles.danger]}>{title}</Text>
      {!danger && <Text style={styles.arrow}>›</Text>}
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
    marginBottom: 2,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  danger: {
    color: colors.danger,
    fontWeight: '600',
  },
  arrow: {
    fontSize: 22,
    color: colors.textSecondary,
    fontWeight: '300',
  },
});
