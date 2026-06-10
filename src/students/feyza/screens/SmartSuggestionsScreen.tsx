import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'SmartSuggestions'>;

const INSIGHTS = [
  {icon: '🎮', text: 'En çok harcama yaptığın oyun: PUBG (%62)'},
  {icon: '🛒', text: 'Haftada ortalama 3 satın alım yapıyorsun'},
  {icon: '🌙', text: 'Harcamaların çoğu gece saatlerinde gerçekleşiyor'},
  {icon: '💰', text: 'Bu ay 400₺ birikim hedefine ulaştın'},
];

const SUGGESTIONS = [
  {
    type: 'info',
    text: 'Skin harcamalarına ayırdığın parayla 2 oyun satın alabilirdin.',
  },
  {
    type: 'warning',
    text: 'Dikkat! Cuma günleri harcamaların ortalamanın %40 üzerinde.',
  },
];

export function SmartSuggestionsScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>Analiz & Akıllı Öneriler</Text>

        <Text style={styles.sectionTitle}>Analiz</Text>
        {INSIGHTS.map((item, index) => (
          <View key={index} style={styles.insightCard}>
            <Text style={styles.insightIcon}>{item.icon}</Text>
            <Text style={styles.insightText}>{item.text}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Akıllı Öneriler</Text>
        {SUGGESTIONS.map((item, index) => (
          <View
            key={index}
            style={[
              styles.suggestionCard,
              item.type === 'warning' && styles.warningCard,
            ]}>
            {item.type === 'warning' && (
              <Text style={styles.warningBadge}>Dikkat!</Text>
            )}
            <Text
              style={[
                styles.suggestionText,
                item.type === 'warning' && styles.warningText,
              ]}>
              {item.text}
            </Text>
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
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 8,
  },
  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  insightIcon: {
    fontSize: 24,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  suggestionCard: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  warningCard: {
    backgroundColor: colors.warning,
  },
  warningBadge: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.warningText,
    marginBottom: 6,
  },
  suggestionText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  warningText: {
    color: colors.warningText,
  },
});
