import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Badge} from '../constants/badges';
import {colors} from '../constants/colors';

type BadgeGridProps = {
  badges: Badge[];
  onBadgePress: (badge: Badge) => void;
};

export function BadgeGrid({badges, onBadgePress}: BadgeGridProps) {
  return (
    <View style={styles.grid}>
      {badges.map(badge => (
        <Pressable
          key={badge.id}
          onPress={() => onBadgePress(badge)}
          style={({pressed}) => [styles.cell, pressed && {opacity: 0.7}]}>
          <View
            style={[
              styles.circle,
              badge.unlocked ? styles.unlocked : styles.lockedCircle,
            ]}>
            <Image
              source={badge.image}
              style={[styles.img, !badge.unlocked && {opacity: 0.5}]}
              resizeMode="contain"
            />
            {!badge.unlocked && (
              <>
                <View style={styles.overlay} />
                <View style={styles.lockBadge}>
                  <Text style={styles.lockGlyph}>🔒</Text>
                </View>
              </>
            )}
          </View>
          <Text
            numberOfLines={2}
            style={[styles.label, !badge.unlocked && styles.labelLocked]}>
            {badge.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8},
  cell: {width: '33.33%', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 4},
  circle: {
    width: 78, height: 78, borderRadius: 39,
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  unlocked: {
    backgroundColor: colors.card, borderWidth: 2, borderColor: colors.primary,
    shadowColor: colors.primary, shadowOpacity: 0.35, shadowRadius: 8,
    shadowOffset: {width: 0, height: 3}, elevation: 4,
  },
  lockedCircle: {backgroundColor: colors.lockedBg, borderWidth: 2, borderColor: colors.locked},
  img: {width: 48, height: 48},
  overlay: {...StyleSheet.absoluteFill, backgroundColor: colors.lockOverlay},
  lockBadge: {
    position: 'absolute', bottom: 6, right: 10, width: 24, height: 24, borderRadius: 12,
    backgroundColor: colors.locked, alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: colors.card,
  },
  lockGlyph: {fontSize: 11},
  label: {marginTop: 8, fontSize: 11, textAlign: 'center', color: colors.text, fontWeight: '600'},
  labelLocked: {color: colors.textSecondary, fontWeight: '500'},
});
