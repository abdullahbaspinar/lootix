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
import {Goal} from '../constants/goals';
import {ModalWrapper} from './ModalWrapper';
import {PrimaryButton} from './PrimaryButton';
import {colors} from '../constants/colors';
import {
  calculateProgress,
  calculateRemaining,
  parsePrice,
} from '../utils/goalHelpers';

type UpdateGoalProgressModalProps = {
  visible: boolean;
  goal: Goal | null;
  onClose: () => void;
  onSave: (goalId: string, newSavedAmount: number) => void;
};

export function UpdateGoalProgressModal({
  visible,
  goal,
  onClose,
  onSave,
}: UpdateGoalProgressModalProps) {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (visible && goal) {
      setAmount(String(goal.savedAmount));
    }
  }, [visible, goal]);

  if (!goal) {
    return null;
  }

  const previewSaved = parsePrice(amount);
  const previewProgress = calculateProgress(previewSaved, goal.price);
  const previewRemaining = calculateRemaining(previewSaved, goal.price);
  const isComplete = previewProgress >= 100;

  const handleSave = () => {
    const newSaved = parsePrice(amount);
    if (newSaved < 0) {
      Alert.alert('Uyarı', 'Geçerli bir tutar girin.');
      return;
    }
    if (newSaved > goal.price) {
      Alert.alert(
        'Uyarı',
        `Birikim tutarı hedef fiyatını (${goal.price}₺) aşamaz.`,
      );
      return;
    }
    onSave(goal.id, newSaved);
    onClose();
  };

  return (
    <ModalWrapper visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>İlerleme Güncelle</Text>
          <Pressable onPress={onClose} hitSlop={12}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        <View style={styles.goalPreview}>
          <Image source={goal.image} style={styles.image} />
          <View>
            <Text style={styles.goalName}>{goal.name}</Text>
            <Text style={styles.goalPrice}>Hedef: {goal.price}₺</Text>
          </View>
        </View>

        <Text style={styles.label}>Biriken tutar (₺)</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={colors.placeholder}
        />

        <View style={styles.previewBox}>
          <Text style={styles.previewText}>İlerleme: %{previewProgress}</Text>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${previewProgress}%`,
                  backgroundColor: isComplete
                    ? colors.success
                    : colors.primary,
                },
              ]}
            />
          </View>
          <Text style={styles.previewRemaining}>
            {isComplete
              ? 'Tebrikler! Hedef tamamlandı.'
              : `${previewRemaining} ₺ kaldı`}
          </Text>
        </View>

        <PrimaryButton title="Kaydet" onPress={handleSave} />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  close: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '700',
  },
  goalPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  goalName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  goalPrice: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
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
    marginBottom: 16,
  },
  previewBox: {
    marginBottom: 20,
  },
  previewText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
  previewRemaining: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
