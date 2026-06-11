import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Pressable, 
  Modal 
} from 'react-native';

export function ProfileScreen({ navigation }: any) {
  const [logoutVisible, setLogoutVisible] = useState(false);

  // App.tsx'teki akışa güvenli yönlendirme köprüleri
  const navigateTo = (screen: string) => {
    if (navigation && navigation.navigate) {
      navigation.navigate(screen);
    }
  };

  const handleLogout = () => {
    setLogoutVisible(false);
    if (navigation && navigation.reset) {
      navigation.reset();
    }
  };

  // Hata veren ProfileMenuItem yerine saf ve şık buton bileşeni
  const renderMenuItem = (title: string, onPress: () => void, danger = false) => (
    <Pressable 
      onPress={onPress} 
      style={({ pressed }) => [
        styles.menuItem, 
        pressed && styles.menuItemPressed
      ]}
    >
      <Text style={[styles.menuItemText, danger && styles.dangerText]}>{title}</Text>
      <Text style={[styles.arrow, danger && styles.dangerText]}>›</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Profil</Text>

      {/* Kullanıcı Bilgileri */}
      <View style={styles.userSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>FD</Text>
        </View>
        <Text style={styles.userName}>Feyza Dönmez</Text>
      </View>

      {/* Menü Listesi */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {renderMenuItem("Profili Düzenle", () => navigateTo('EditProfile'))}
        {renderMenuItem("Arkadaş Ekle", () => navigateTo('AddFriend'))}
        {renderMenuItem("Yardım & Destek", () => navigateTo('HelpSupport'))}
        {renderMenuItem("Ayarlar", () => navigateTo('Settings'))}
        {renderMenuItem("Hakkımızda", () => navigateTo('About'))}
        {renderMenuItem("Çıkış Yap", () => setLogoutVisible(true), true)}
      </ScrollView>

      {/* Hata veren LogoutModal yerine dosya içinde gömülü saf Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutVisible}
        onRequestClose={() => setLogoutVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Çıkış Yap</Text>
            <Text style={styles.modalMessage}>Hesabınızdan çıkış yapmak istediğinize emin misiniz?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={[styles.modalButton, styles.cancelButton]} onPress={() => setLogoutVisible(false)}>
                <Text style={styles.cancelButtonText}>Vazgeç</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, styles.confirmButton]} onPress={handleLogout}>
                <Text style={styles.confirmButtonText}>Çıkış Yap</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', // Genel arka plan renginle eşitlendi
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700', // Standart kalın düz yazı başlığı
    color: '#1A1A1A',
    textAlign: 'center',
    paddingTop: 20,
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
    backgroundColor: '#BF0909', // Uygulamanın ana kırmızı tonu
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600', // Düz yazı standardına uygun temiz kalınlık
    color: '#1A1A1A',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 10,
    elevation: 1,
  },
  menuItemPressed: {
    opacity: 0.8,
    backgroundColor: '#F5F5F5',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  arrow: {
    fontSize: 20,
    color: '#A6A6A6',
  },
  dangerText: {
    color: '#BF0909',
    fontWeight: '600',
  },
  // MODAL STİLLERİ
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
  },
  cancelButtonText: {
    color: '#1A1A1A',
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#BF0909',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});