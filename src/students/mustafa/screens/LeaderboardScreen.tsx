import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {LeaderboardRow} from '../components/LeaderboardRow';
import {Podium} from '../components/Podium';
import {LEADERBOARD} from '../constants/badges';
import {colors, fonts} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Leaderboard'>;

export function LeaderboardScreen({navigation}: Props) {
  const topThree = LEADERBOARD.filter(u => u.rank <= 3);
  const others = LEADERBOARD.filter(u => u.rank > 3 && !u.isCurrentUser);
  const currentUser = LEADERBOARD.find(u => u.isCurrentUser);

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <Text style={styles.title}>Liderlik Tablosu</Text>

      {/* Üst kısım gri zeminde: kürsü */}
      <Podium topThree={topThree} />

      {/* Alt kısım beyaz panel: sıralama listesi + sabit kullanıcı satırı */}
      <View style={styles.sheet}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}>
          {others.map((user, i) => (
            <LeaderboardRow
              key={user.id}
              user={user}
              isLast={i === others.length - 1}
            />
          ))}
        </ScrollView>

        {currentUser && <LeaderboardRow user={currentUser} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: abdullahColors.headerGray},
  title: {
    fontSize: 24,
    fontFamily: fonts.bold, // Pixelify Sans (bağlıysa); değilse sistem fontu
    color: colors.text,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.card,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 12,
    overflow: 'hidden',
  },
  list: {paddingBottom: 8},
});
