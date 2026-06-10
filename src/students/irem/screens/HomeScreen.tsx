import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {GAMES} from '../../abdullah/constants/games';
import {LogoPageLayout} from '../../abdullah/components/LogoPageLayout';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';
import {SpendingLineChart} from '../components/SpendingLineChart';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation}: Props) {
  const lastGame = GAMES[0];

  return (
    <View style={styles.container}>
      <LogoPageLayout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <Text style={styles.greeting}>Hoş Geldin, Abdullah</Text>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Bu Ay Toplam Harcama</Text>
            <Text style={styles.cardAmount}>3.650₺</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, {width: '65%'}]} />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Son 7 Günlük Harcama</Text>
            <SpendingLineChart />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Son Satın Alım</Text>
            <View style={styles.lastPurchase}>
              <Image source={lastGame.image} style={styles.lastGameIcon} />
              <View style={styles.lastPurchaseInfo}>
                <Text style={styles.lastPurchaseTitle}>
                  {lastGame.name} - Lootbox
                </Text>
                <Text style={styles.lastPurchasePrice}>50₺</Text>
              </View>
            </View>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.warningIcon}>!</Text>
            <Text style={styles.warningText}>
              Bu ay harcama limitinize yaklaşıyorsunuz.
            </Text>
          </View>
        </ScrollView>
      </LogoPageLayout>

      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate('AddExpenseGame')}>
        <Text style={styles.fabIcon}>+</Text>
      </Pressable>

      <BottomTabBar
        activeTab="home"
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
  scrollContent: {
    paddingBottom: 100,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 14,
    color: colors.textSecondary,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  cardAmount: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  lastPurchase: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lastGameIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  lastPurchaseInfo: {
    flex: 1,
  },
  lastPurchaseTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  lastPurchasePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 20,
    marginTop: 4,
    padding: 12,
    backgroundColor: '#FFF0F0',
    borderRadius: 12,
  },
  warningIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.warning,
    color: colors.card,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '700',
    fontSize: 14,
    overflow: 'hidden',
  },
  warningText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 90,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  fabIcon: {
    color: colors.card,
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 30,
  },
});
