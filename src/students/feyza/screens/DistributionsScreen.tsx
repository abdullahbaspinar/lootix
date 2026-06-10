import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {CategoryBarChart} from '../components/CategoryBarChart';
import {DonutChart} from '../components/DonutChart';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Distributions'>;

const GAME_SEGMENTS = [
  {label: 'PUBG', percent: 62.3, color: '#B71C1C'},
  {label: 'LOL', percent: 24.3, color: '#E53935'},
  {label: 'Clash Royale', percent: 13.4, color: '#EF5350'},
];

const CATEGORY_ITEMS = [
  {label: 'Lootbox', percent: 50},
  {label: 'Skin', percent: 25},
  {label: 'Battle Pass', percent: 16},
  {label: 'Diğer', percent: 9},
];

export function DistributionsScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>Dağılımlar</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Oyunlara Göre Dağılımlar</Text>
          <DonutChart segments={GAME_SEGMENTS} />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Kategorilere Göre Dağılımlar</Text>
          <CategoryBarChart items={CATEGORY_ITEMS} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
});
