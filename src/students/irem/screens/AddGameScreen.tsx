import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddGame'>;

export function AddGameScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const [gameName, setGameName] = useState('');

  const handleSave = () => {
    if (gameName.trim().length === 0) {
      return;
    }
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>〈</Text>
        </Pressable>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Oyun Ekle</Text>
          <Text style={styles.subtitle}>
            Listede olmayan bir oyunu buradan ekleyebilirsin.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Oyun adı"
            placeholderTextColor={colors.textMuted}
            value={gameName}
            onChangeText={setGameName}
          />

          <Pressable
            style={[styles.saveButton, !gameName.trim() && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={!gameName.trim()}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </Pressable>
        </View>
      </View>
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
  backButton: {
    position: 'absolute',
    left: 20,
    marginTop: 20,
    padding: 10,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  card: {
    backgroundColor: colors.cardMuted,
    borderRadius: 30,
    padding: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: colors.badge,
  },
  saveButtonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
