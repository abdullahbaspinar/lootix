import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {LogoPageLayout} from '../../abdullah/components/LogoPageLayout';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {BottomTabBar} from '../../irem/components/BottomTabBar';
import {BadgeGrid} from '../components/BadgeGrid';
import {BADGES} from '../constants/badges';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Progress'>;

export function ProgressScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <LogoPageLayout>
        <Text style={styles.title}>İlerlemelerim</Text>

        <Pressable
          style={styles.leaderboardButton}
          onPress={() => navigation.navigate('Leaderboard')}>
          <Text style={styles.leaderboardText}>Liderlik Tablosu</Text>
        </Pressable>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <BadgeGrid badges={BADGES} />
        </ScrollView>
      </LogoPageLayout>

      <BottomTabBar
        activeTab="chart2"
        onTabPress={tab => handleTabPress(navigation, tab)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: abdullahColors.headerGray,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  leaderboardButton: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginBottom: 24,
  },
  leaderboardText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
  },
  content: {
    paddingBottom: 100,
  },
});
