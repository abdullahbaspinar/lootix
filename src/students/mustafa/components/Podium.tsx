import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LeaderboardUser} from '../constants/badges';
import {colors} from '../constants/colors';

const PROFIL = require('../assets/ui/profil.png');

type PodiumProps = {
  topThree: LeaderboardUser[]; // [1.lik, 2.lik, 3.lük] (sira gore)
};

// place: 0=1.lik, 1=2.lik, 2=3.lük
const RING = ['#F2B705', '#4FA3E3', '#5FBF77']; // altın / mavi / yeşil
const PILLAR_H = [128, 96, 84];
const ORDER = [1, 0, 2]; // ekranda: 2.lik - 1.lik - 3.lük

export function Podium({topThree}: PodiumProps) {
  const ordered = ORDER.map(i => topThree[i]).filter(Boolean);

  return (
    <View style={styles.container}>
      {ordered.map(user => {
        const place = topThree.indexOf(user); // 0,1,2
        const isFirst = place === 0;
        const size = isFirst ? 74 : 58;

        return (
          <View key={user.id} style={styles.column}>
            {isFirst && <Text style={styles.crown}>👑</Text>}

            <View
              style={[
                styles.avatarRing,
                {width: size, height: size, borderRadius: size / 2, borderColor: RING[place]},
              ]}>
              <Image
                source={user.avatar || PROFIL}
                style={{width: size - 8, height: size - 8, borderRadius: (size - 8) / 2}}
              />
              {!isFirst && (
                <View style={[styles.rankDot, {backgroundColor: RING[place]}]}>
                  <Text style={styles.rankDotText}>{user.rank}</Text>
                </View>
              )}
            </View>

            <View
              style={[
                styles.pillar,
                {height: PILLAR_H[place], backgroundColor: isFirst ? colors.primary : colors.podium},
              ]}>
              <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
              <Text style={[styles.points, {color: isFirst ? colors.gold : RING[place]}]}>
                {user.points}
              </Text>
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
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 4,
    marginBottom: 10,
  },
  column: {flex: 1, alignItems: 'center'},
  crown: {fontSize: 24, marginBottom: 2},
  avatarRing: {
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    marginBottom: -16,
    zIndex: 2,
  },
  rankDot: {
    position: 'absolute',
    bottom: -4,
    alignSelf: 'center',
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.card,
  },
  rankDotText: {color: colors.card, fontWeight: '800', fontSize: 11},
  pillar: {
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 24,
    paddingBottom: 16,
  },
  name: {color: colors.card, fontWeight: '700', fontSize: 13, maxWidth: '92%'},
  points: {fontWeight: '900', fontSize: 18, marginTop: 2},
});
