import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../../irem/components/BottomTabBar';
import {LogoutModal} from '../components/LogoutModal';
import {ProfileMenuItem} from '../components/ProfileMenuItem';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export function ProfileScreen({navigation}: Props) {
  const [logoutVisible, setLogoutVisible] = useState(false);

  const handleLogout = () => {
    setLogoutVisible(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Profil</Text>

      <View style={styles.userSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>FD</Text>
        </View>
        <Text style={styles.userName}>Feyza Dönmez</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileMenuItem
          title="Profili Düzenle"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ProfileMenuItem
          title="Arkadaş Ekle"
          onPress={() => navigation.navigate('AddFriend')}
        />
        <ProfileMenuItem
          title="Yardım & Destek"
          onPress={() => navigation.navigate('HelpSupport')}
        />
        <ProfileMenuItem
          title="Ayarlar"
          onPress={() => navigation.navigate('Settings')}
        />
        <ProfileMenuItem
          title="Hakkımızda"
          onPress={() => navigation.navigate('About')}
        />
        <ProfileMenuItem
          title="Çıkış Yap"
          onPress={() => setLogoutVisible(true)}
          danger
        />
      </ScrollView>

      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={handleLogout}
      />

      <BottomTabBar
        activeTab="settings"
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
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    paddingTop: 16,
    marginBottom: 24,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.card,
    fontSize: 24,
    fontWeight: '700',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
});
