import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {ContentSheet} from '../../abdullah/components/ContentSheet';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {BottomTabBar} from '../../irem/components/BottomTabBar';
import {AnalysisMenuItem} from '../components/AnalysisMenuItem';
import {MonthlyLineChart} from '../components/MonthlyLineChart';
import {PeriodTabs} from '../components/PeriodTabs';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Analysis'>;

export function AnalysisScreen({navigation}: Props) {
  const [period, setPeriod] = useState<
    'daily' | 'weekly' | 'monthly' | 'yearly'
  >('monthly');

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ContentSheet>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>Analizim</Text>

        <PeriodTabs active={period} onChange={setPeriod} />

        <View style={styles.monthSelector}>
          <Pressable>
            <Text style={styles.arrow}>‹</Text>
          </Pressable>
          <Text style={styles.month}>Mayıs</Text>
          <Pressable>
            <Text style={styles.arrow}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.total}>1.275,50 ₺</Text>

        <View style={styles.chartCard}>
          <MonthlyLineChart />
        </View>

        <AnalysisMenuItem
          title="Oyunlara & Kategorilere Göre Dağılımlar"
          onPress={() => navigation.navigate('Distributions')}
        />
        <AnalysisMenuItem
          title="Analiz & Akıllı Öneriler"
          onPress={() => navigation.navigate('SmartSuggestions')}
        />
        <AnalysisMenuItem
          title="İşlem Takvimi"
          onPress={() => navigation.navigate('TransactionCalendar')}
        />
      </ScrollView>
      </ContentSheet>

      <BottomTabBar
        activeTab="chart1"
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
  content: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 12,
  },
  month: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  arrow: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '300',
  },
  total: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  chartCard: {
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
});
