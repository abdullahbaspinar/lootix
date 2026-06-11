import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export function EditProfileScreen({navigation}: any) {
  const [username, setUsername] = useState('Feyza Dönmez');
  const [email, setEmail] = useState('feyza@mail.com');
  const [password, setPassword] = useState('');

  // Navigasyon yoksa App.tsx'teki currentScreen akışına güvenli köprü kuruyoruz
  const goBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Hata veren ScreenHeader yerine saf React Native Üst Bar */}
      <View style={styles.headerBar}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Text style={styles.backArrow}>〈 Geri</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profili Düzenle</Text>

        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>FD</Text>
            <Pressable style={styles.cameraButton}>
              <Text style={styles.cameraIcon}>📷</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#A8A8A8"
        />

        <Text style={styles.label}>E-Posta</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#A8A8A8"
        />

        <Text style={styles.label}>Şifre</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          placeholderTextColor="#A8A8A8"
        />

        {/* Hata veren PrimaryButton yerine saf TouchableOpacity Buton */}
        <Pressable onPress={goBack} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', // Senin genel background rengin
  },
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#A6A6A6', // Senin genel gri header rengin
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    paddingBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#BF0909', // Senin uygulamanın ana kırmızı rengi
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  cameraIcon: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  input: {
    marginHorizontal: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#1A1A1A',
    backgroundColor: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#BF0909', // Senin canlı kırmızı buton rengin
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginTop: 8,
    elevation: 3,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});