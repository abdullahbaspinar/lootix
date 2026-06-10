import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {LeaderboardRow} from '../components/LeaderboardRow';
import {Podium} from '../components/Podium';
import {LEADERBOARD} from '../constants/badges';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Leaderboard'>;

export function LeaderboardScreen({navigation}: Props) {
  const topThree = LEADERBOARD.filter(u => u.rank <= 3);
  const rest = LEADERBOARD.filter(u => u.rank > 3);
  const currentUser = LEADERBOARD.find(u => u.isCurrentUser);

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <Text style={styles.title}>Liderlik Tablosu</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Podium topThree={topThree} />

        {rest.map(user => (
          <LeaderboardRow key={user.id} user={user} />
        ))}

        {currentUser && currentUser.rank > 3 && (
          <LeaderboardRow user={currentUser} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    paddingBottom: 40,
  },
});
