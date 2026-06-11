import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {LogoPageLayout} from '../../abdullah/components/LogoPageLayout';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {BottomTabBar} from '../../irem/components/BottomTabBar';
import {BadgeGrid} from '../components/BadgeGrid';
import {BadgeModal} from '../components/BadgeModal';
import {Badge, BADGES, TOTAL_BADGES} from '../constants/badges';
import {colors, fonts} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Progress'>;

export function ProgressScreen({navigation}: Props) {
  const [badges, setBadges] = useState<Badge[]>(BADGES);
  const [selected, setSelected] = useState<Badge | null>(null);
  const unlockedCount = useMemo(() => badges.filter(b => b.unlocked).length, [badges]);

  // Görev tamamlanınca rozeti aç (gri -> kırmızı)
  const unlockBadge = (id: string) => {
    setBadges(prev =>
      prev.map(b => (b.id === id ? {...b, unlocked: true, progress: b.goal} : b)),
    );
    setSelected(prev => (prev ? {...prev, unlocked: true, progress: prev.goal} : prev));
  };

  return (
    <View style={styles.container}>
      <LogoPageLayout>
        <Text style={styles.title}>İlerlemelerim</Text>

        <Pressable
          style={({pressed}) => [styles.leaderboardButton, pressed && {opacity: 0.85}]}
          onPress={() => navigation.navigate('Leaderboard')}>
          <Text style={styles.leaderboardText}>🏆  Liderlik Tablosu</Text>
        </Pressable>

        <Text style={styles.counter}>
          Rozetlerim{' '}
          <Text style={styles.counterStrong}>
            {unlockedCount}/{TOTAL_BADGES}
          </Text>
        </Text>

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <BadgeGrid badges={badges} onBadgePress={setSelected} />
        </ScrollView>
      </LogoPageLayout>

      <BottomTabBar
        activeTab="chart2"
        onTabPress={tab => handleTabPress(navigation, tab)}
      />

      <BadgeModal
        badge={selected}
        visible={!!selected}
        onClose={() => setSelected(null)}
        onComplete={unlockBadge}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: abdullahColors.headerGray},
  title: {
    fontSize: 28,
    fontFamily: fonts.bold, // Pixelify Sans (bağlıysa); değilse sistem fontuna düşer
    color: colors.text,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 12,
    letterSpacing: 1,
  },
  leaderboardButton: {
    alignSelf: 'center',
    backgroundColor: colors.podium,
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 22,
  },
  leaderboardText: {fontSize: 14, fontWeight: '700', color: colors.card},
  counter: {textAlign: 'center', color: colors.textSecondary, marginTop: 14, marginBottom: 4, fontSize: 14},
  counterStrong: {color: colors.primary, fontWeight: '800'},
  scroll: {flex: 1, marginTop: 6},
  content: {paddingBottom: 150},
});
