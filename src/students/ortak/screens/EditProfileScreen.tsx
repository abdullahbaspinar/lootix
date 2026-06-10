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
import {PrimaryButton} from '../../abdullah/components/PrimaryButton';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'EditProfile'>;

export function EditProfileScreen({navigation}: Props) {
  const [username, setUsername] = useState('Feyza Dönmez');
  const [email, setEmail] = useState('feyza@mail.com');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />

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
          placeholderTextColor={colors.placeholder}
        />

        <Text style={styles.label}>E-Posta</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={colors.placeholder}
        />

        <Text style={styles.label}>Şifre</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          placeholderTextColor={colors.placeholder}
        />

        <PrimaryButton
          title="Kaydet"
          onPress={() => navigation.goBack()}
          style={styles.saveButton}
        />
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
  avatarSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarText: {
    color: colors.card,
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
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  cameraIcon: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  input: {
    marginHorizontal: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.text,
    backgroundColor: colors.card,
  },
  saveButton: {
    marginTop: 8,
  },
});
