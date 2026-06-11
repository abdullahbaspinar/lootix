import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LeaderboardUser} from '../constants/badges';
import {colors} from '../constants/colors';

const PROFIL = require('../assets/ui/profil.png');

const UP = '#3CB85C';
const DOWN = colors.primary;

type LeaderboardRowProps = {
  user: LeaderboardUser;
  isLast?: boolean; // son satırda alt ayraç çizgisi olmasın
};

export function LeaderboardRow({user, isLast}: LeaderboardRowProps) {
  const up = user.trend !== 'down';
  const triangle = up ? '▲' : '▼';
  const triColor = up ? UP : DOWN;

  // Vurgulu "kullanıcı" satırı (en altta, gri kapsül, boş avatar)
  if (user.isCurrentUser) {
    return (
      <View style={styles.meRow}>
        <View style={styles.meAvatar} />
        <Text style={styles.meName} numberOfLines={1}>{user.name}</Text>
        <View style={styles.right}>
          <Text style={styles.mePoints}>{user.points} Puan</Text>
          <Text style={[styles.tri, {color: triColor}]}>{triangle}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.row, !isLast && styles.rowBorder]}>
      <Image source={user.avatar || PROFIL} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
      <View style={styles.right}>
        <Text style={styles.points}>{user.points} Puan</Text>
        <Text style={[styles.tri, {color: triColor}]}>{triangle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  rowBorder: {borderBottomWidth: 1, borderBottomColor: colors.border},
  avatar: {width: 40, height: 40, borderRadius: 20, marginRight: 12, backgroundColor: colors.cardAlt},
  name: {flex: 1, fontSize: 14, fontWeight: '600', color: colors.textSecondary},
  right: {flexDirection: 'row', alignItems: 'center', gap: 8},
  points: {fontSize: 13, fontWeight: '700', color: colors.text},
  tri: {fontSize: 12, fontWeight: '900'},

  // Kullanıcı (vurgulu) satır
  meRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C9C9CE',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginHorizontal: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  meAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
  },
  meName: {flex: 1, fontSize: 14, fontWeight: '800', color: colors.text},
  mePoints: {fontSize: 13, fontWeight: '800', color: colors.text},
});
