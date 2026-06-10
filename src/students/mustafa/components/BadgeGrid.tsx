import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Badge} from '../constants/badges';
import {colors} from '../constants/colors';

type BadgeGridProps = {
  badges: Badge[];
};

export function BadgeGrid({badges}: BadgeGridProps) {
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <View>
      <Text style={styles.title}>
        Rozetlerim {unlockedCount}/{badges.length}
      </Text>
      <View style={styles.grid}>
        {badges.map(badge => (
          <View
            key={badge.id}
            style={[
              styles.badge,
              !badge.unlocked && styles.badgeLocked,
            ]}>
            <Text
              style={[
                styles.emoji,
                !badge.unlocked && styles.emojiLocked,
              ]}>
              {badge.emoji}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
    justifyContent: 'flex-start',
  },
  badge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeLocked: {
    backgroundColor: '#EEEEEE',
  },
  emoji: {
    fontSize: 32,
  },
  emojiLocked: {
    opacity: 0.35,
  },
});
