import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LeaderboardUser} from '../constants/badges';
import {colors} from '../constants/colors';

type LeaderboardRowProps = {
  user: LeaderboardUser;
};

export function LeaderboardRow({user}: LeaderboardRowProps) {
  return (
    <View
      style={[
        styles.row,
        user.isCurrentUser && styles.rowHighlight,
      ]}>
      <Text style={styles.rank}>{user.rank}</Text>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{user.initials}</Text>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.points}>{user.points} Puan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  rowHighlight: {
    backgroundColor: '#EEEEEE',
    marginHorizontal: 12,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  rank: {
    width: 28,
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: colors.card,
    fontSize: 13,
    fontWeight: '700',
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  points: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
