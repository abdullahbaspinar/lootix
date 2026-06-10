import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'TransactionCalendar'>;

const DAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const TRANSACTION_DAYS = [2, 5, 8, 12, 15, 19, 22, 26, 28];

const TRANSACTIONS = [
  {date: '02.05.2024', game: 'PUBG', category: 'Skin'},
  {date: '05.05.2024', game: 'LOL', category: 'Lootbox'},
  {date: '08.05.2024', game: 'PUBG', category: 'Battle Pass'},
  {date: '12.05.2024', game: 'Clash Royale', category: 'Diğer'},
  {date: '15.05.2024', game: 'PUBG', category: 'Lootbox'},
  {date: '19.05.2024', game: 'Valorant', category: 'Skin'},
];

function CalendarGrid() {
  const cells = [];
  for (let i = 0; i < 35; i++) {
    const day = i - 2;
    const isValid = day >= 1 && day <= 31;
    const hasTransaction = TRANSACTION_DAYS.includes(day);
    cells.push(
      <View key={i} style={styles.dayCell}>
        {isValid && (
          <View
            style={[
              styles.dayCircle,
              hasTransaction && styles.dayActive,
            ]}>
            <Text
              style={[
                styles.dayText,
                hasTransaction && styles.dayTextActive,
              ]}>
              {day}
            </Text>
          </View>
        )}
      </View>,
    );
  }

  return (
    <View>
      <View style={styles.weekHeader}>
        {DAYS.map(d => (
          <Text key={d} style={styles.weekDay}>
            {d}
          </Text>
        ))}
      </View>
      <View style={styles.grid}>{cells}</View>
    </View>
  );
}

export function TransactionCalendarScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>İşlem Takvimi</Text>
        <Text style={styles.month}>Mayıs 2024</Text>

        <View style={styles.calendarCard}>
          <CalendarGrid />
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.colHeader, styles.dateCol]}>Tarih</Text>
          <Text style={[styles.colHeader, styles.gameCol]}>Oyun</Text>
          <Text style={[styles.colHeader, styles.catCol]}>Kategori</Text>
        </View>

        {TRANSACTIONS.map((tx, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.cell, styles.dateCol]}>{tx.date}</Text>
            <Text style={[styles.cell, styles.gameCol]}>{tx.game}</Text>
            <Text style={[styles.cell, styles.catCol]}>{tx.category}</Text>
          </View>
        ))}
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
  },
  month: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 4,
  },
  calendarCard: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  weekHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayActive: {
    backgroundColor: colors.primary,
  },
  dayText: {
    fontSize: 13,
    color: colors.text,
  },
  dayTextActive: {
    color: colors.card,
    fontWeight: '700',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 4,
  },
  colHeader: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  cell: {
    fontSize: 14,
    color: colors.text,
  },
  dateCol: {
    flex: 2,
  },
  gameCol: {
    flex: 1.5,
  },
  catCol: {
    flex: 1.5,
  },
});
