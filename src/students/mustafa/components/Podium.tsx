import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LeaderboardUser} from '../constants/badges';
import {colors} from '../constants/colors';

type PodiumProps = {
  topThree: LeaderboardUser[];
};

const PODIUM_COLORS = [colors.gold, colors.silver, colors.bronze];
const PODIUM_HEIGHTS = [100, 80, 60];
const PODIUM_ORDER = [1, 0, 2];

export function Podium({topThree}: PodiumProps) {
  const ordered = PODIUM_ORDER.map(i => topThree[i]).filter(Boolean);

  return (
    <View style={styles.container}>
      {ordered.map((user, index) => {
        const originalIndex = PODIUM_ORDER[index];
        return (
          <View key={user.id} style={styles.column}>
            {originalIndex === 0 && (
              <Text style={styles.crown}>👑</Text>
            )}
            <View style={styles.avatar}>
              <Text style={styles.initials}>{user.initials}</Text>
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {user.name}
            </Text>
            <Text style={styles.points}>{user.points} Puan</Text>
            <View
              style={[
                styles.podium,
                {
                  height: PODIUM_HEIGHTS[originalIndex],
                  backgroundColor: PODIUM_COLORS[originalIndex],
                },
              ]}>
              <Text style={styles.rank}>#{user.rank}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  crown: {
    fontSize: 20,
    marginBottom: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  initials: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '700',
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
    maxWidth: 80,
    textAlign: 'center',
  },
  points: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  podium: {
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.card,
  },
});
