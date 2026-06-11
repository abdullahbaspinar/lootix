import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation, route}: Props) {
  const insets = useSafeAreaInsets();
  const [totalExpense, setTotalExpense] = useState(3650);

  useEffect(() => {
    const added = route.params?.newExpense;
    if (added && added > 0) {
      setTotalExpense(prev => prev + added);
      navigation.setParams({newExpense: undefined});
    }
  }, [navigation, route.params?.newExpense]);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/profil.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Hoş Geldin, İrem 👋</Text>

        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Bu Ay Toplam Harcama</Text>
          <Text style={styles.money}>
            {totalExpense.toLocaleString('tr-TR')}₺
          </Text>
          <View style={styles.percentBox}>
            <Text style={styles.percentText}>%18</Text>
            <Text style={styles.percentSubText}>Geçen aya göre artış</Text>
          </View>
        </View>

        <View style={styles.graphCard}>
          <View style={styles.graphHeaderRow}>
            <Text style={styles.graphTitle}>Son 7 Günlük Harcama</Text>
            <View style={styles.graphBadge}>
              <Text style={styles.graphBadgeText}>%6</Text>
              <Text style={styles.graphBadgeSubText}>
                Geçen haftaya göre azalış
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/grafik.png')}
            style={styles.graphImage}
          />
        </View>

        <View style={styles.recentPurchaseCard}>
          <View style={styles.purchaseLeft}>
            <Text style={styles.purchaseCardTitle}>Son Satın Alım</Text>
            <Text style={styles.purchaseItem}>PUBG Mobile-Lootbox</Text>
            <Text style={styles.purchasePrice}>50 ₺</Text>
          </View>
          <View style={styles.purchaseRight}>
            <Image
              source={require('../assets/pubg.png')}
              style={styles.purchaseImage}
            />
            <Text style={styles.purchaseTime}>2 saat önce</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.warningCard}>
            <Text style={styles.warningIcon}>!</Text>
            <Text style={styles.warningText}>
              Bu hafta yaptığın lootbox harcemalarıyla, hedefinin %18'ini
              kaybettin.
            </Text>
          </View>
          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate('AddExpenseGame')}>
            <Text style={styles.plus}>+</Text>
          </Pressable>
        </View>
      </View>

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
    backgroundColor: colors.background,
  },
  header: {
    height: 110,
    backgroundColor: colors.headerGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'relative',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 20,
    position: 'absolute',
  },
  profile: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginTop: 25,
    position: 'absolute',
    right: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 27.5,
  },
  content: {
    padding: 16,
    paddingTop: 15,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 100,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: colors.text,
  },
  mainCard: {
    backgroundColor: colors.cardSecondary,
    borderRadius: 25,
    padding: 16,
    height: 150,
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
  },
  money: {
    color: colors.card,
    fontSize: 40,
    fontWeight: 'bold',
  },
  percentBox: {
    backgroundColor: colors.badge,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  percentText: {
    color: colors.card,
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 5,
  },
  percentSubText: {
    color: colors.card,
    fontSize: 8,
  },
  graphCard: {
    backgroundColor: colors.cardMuted,
    borderRadius: 25,
    padding: 15,
    marginTop: 14,
    height: 180,
    overflow: 'hidden',
  },
  graphHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  graphBadge: {
    backgroundColor: colors.badge,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  graphBadgeText: {
    color: colors.card,
    fontWeight: '700',
    fontSize: 12,
    marginRight: 4,
  },
  graphBadgeSubText: {
    color: colors.card,
    fontSize: 8,
  },
  graphImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: -90,
  },
  recentPurchaseCard: {
    backgroundColor: colors.cardMuted,
    borderRadius: 25,
    padding: 15,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  purchaseLeft: {
    flex: 1,
  },
  purchaseCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  purchaseItem: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  purchasePrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 1,
  },
  purchaseRight: {
    alignItems: 'center',
  },
  purchaseImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginBottom: 2,
  },
  purchaseTime: {
    fontSize: 10,
    color: colors.textMuted,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  warningCard: {
    backgroundColor: colors.cardMuted,
    borderRadius: 25,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
    height: 85,
  },
  warningIcon: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: 'bold',
    marginRight: 10,
  },
  warningText: {
    fontSize: 10,
    color: colors.text,
    flex: 1,
    lineHeight: 13,
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  plus: {
    color: colors.card,
    fontSize: 42,
    fontWeight: '600',
  },
});
