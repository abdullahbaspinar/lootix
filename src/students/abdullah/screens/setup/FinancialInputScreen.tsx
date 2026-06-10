import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Logo} from '../../components/Logo';
import {PrimaryButton} from '../../components/PrimaryButton';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'FinancialInput'>;

export function FinancialInputScreen({navigation}: Props) {
  const [monthlySpending, setMonthlySpending] = useState('1.000');
  const [monthlySavings, setMonthlySavings] = useState('400');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Logo size="medium" style={styles.logo} />

        <View style={styles.fieldGroup}>
          <Text style={styles.question}>
            Aylık tahmini oyunlara kaç TL harcıyorsun?
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={monthlySpending}
              onChangeText={setMonthlySpending}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor={colors.placeholder}
            />
            <Text style={styles.suffix}>TL</Text>
          </View>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.question}>
            Aylık tahmini ne kadar birikim yapıyorsun?
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={monthlySavings}
              onChangeText={setMonthlySavings}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor={colors.placeholder}
            />
            <Text style={styles.suffix}>TL</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton
          title="İlerle"
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  logo: {
    marginBottom: 40,
  },
  fieldGroup: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 24,
    marginBottom: 16,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  suffix: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    marginLeft: 8,
  },
  footer: {
    paddingBottom: 32,
    paddingTop: 8,
  },
});
