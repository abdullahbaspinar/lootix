import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddFriend'>;

type FriendUser = {
  id: string;
  name: string;
  initials: string;
};

const USERS: FriendUser[] = [
  {id: '1', name: 'Ahmet Kaya', initials: 'AK'},
  {id: '2', name: 'Zeynep Yılmaz', initials: 'ZY'},
  {id: '3', name: 'Mehmet Demir', initials: 'MD'},
  {id: '4', name: 'Elif Şahin', initials: 'EŞ'},
];

type Tab = 'pending' | 'friends';

export function AddFriendScreen({navigation}: Props) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('pending');

  const filtered = USERS.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />

      <Text style={styles.title}>Arkadaş Ekle</Text>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Kullanıcı ara..."
          placeholderTextColor={colors.placeholder}
        />
      </View>

      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, activeTab === 'pending' && styles.tabActive]}
          onPress={() => setActiveTab('pending')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'pending' && styles.tabTextActive,
            ]}>
            Bekleyen İstekler
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'friends' && styles.tabActive]}
          onPress={() => setActiveTab('friends')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'friends' && styles.tabTextActive,
            ]}>
            Arkadaşlarım
          </Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.map(user => (
          <View key={user.id} style={styles.userRow}>
            <View style={styles.avatar}>
              <Text style={styles.initials}>{user.initials}</Text>
            </View>
            <Text style={styles.userName}>{user.name}</Text>
            <Pressable style={styles.addButton}>
              <Text style={styles.addText}>Ekle</Text>
            </Pressable>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.card,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.card,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.card,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '700',
  },
  userName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addText: {
    color: colors.card,
    fontSize: 13,
    fontWeight: '600',
  },
});
