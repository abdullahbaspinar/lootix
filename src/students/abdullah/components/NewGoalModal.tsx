import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ModalWrapper} from './ModalWrapper';
import {PrimaryButton} from './PrimaryButton';
import {colors} from '../constants/colors';

type NewGoalData = {
  name: string;
  price: string;
  imageUri?: string;
};

type NewGoalModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: NewGoalData) => void;
};

export function NewGoalModal({visible, onClose, onSubmit}: NewGoalModalProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState<string | undefined>();

  useEffect(() => {
    if (visible) {
      setName('');
      setPrice('');
      setImageUri(undefined);
    }
  }, [visible]);

  const handlePickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        quality: 0.8,
      },
      response => {
        if (response.didCancel) {
          return;
        }
        if (response.errorCode) {
          Alert.alert('Hata', response.errorMessage ?? 'Görsel seçilemedi.');
          return;
        }
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setImageUri(uri);
        }
      },
    );
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Uyarı', 'Hedef adını girin.');
      return;
    }
    if (!price.trim()) {
      Alert.alert('Uyarı', 'Hedef tutarını girin.');
      return;
    }

    onSubmit({name: name.trim(), price, imageUri});
    onClose();
  };

  return (
    <ModalWrapper visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Yeni Hedef</Text>
          <Pressable onPress={onClose} hitSlop={12}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        <Text style={styles.label}>Hedefin ne?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="DualShock"
          placeholderTextColor={colors.placeholder}
        />

        <Text style={styles.label}>Hedefin ne kadar?</Text>
        <View style={styles.priceRow}>
          <TextInput
            style={[styles.input, styles.priceInput]}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="6000"
            placeholderTextColor={colors.placeholder}
          />
          <Text style={styles.currency}>₺</Text>
        </View>

        <Text style={styles.label}>Hedefin için görsel ekle</Text>
        <Pressable style={styles.uploadArea} onPress={handlePickImage}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.previewImage} />
          ) : (
            <>
              <Text style={styles.uploadIcon}>🖼️</Text>
              <Text style={styles.uploadText}>tap to upload image</Text>
            </>
          )}
        </Pressable>

        <PrimaryButton title="Hedef Ekle" onPress={handleSubmit} />
      </View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 24,
    paddingBottom: 28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  close: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.text,
    backgroundColor: colors.background,
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceInput: {
    flex: 1,
    marginBottom: 0,
  },
  currency: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 10,
  },
  uploadArea: {
    height: 140,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  uploadIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
