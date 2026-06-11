import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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

export function AddFriendScreen({navigation}: any) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('pending');

  const filtered = USERS.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  const goBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.headerBar}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Text style={styles.backArrow}>〈 Geri</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Arkadaş Ekle</Text>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Kullanıcı ara..."
          placeholderTextColor="#A8A8A8"
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

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
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
    backgroundColor: '#E5E5E5', // Genel arka plan rengin
  },
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#A6A6A6', // Genel gri header rengin
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: '700', // Standart kalın düz yazı başlığı
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1A1A1A',
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
    backgroundColor: '#FFFFFF',
    elevation: 1,
  },
  tabActive: {
    backgroundColor: '#BF0909', // Senin canlı kırmızı rengin
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555555',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    elevation: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#BF0909',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  userName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600', // Düz yazı standardı liste metni kalınlığı
    color: '#1A1A1A',
  },
  addButton: {
    backgroundColor: '#BF0909',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});