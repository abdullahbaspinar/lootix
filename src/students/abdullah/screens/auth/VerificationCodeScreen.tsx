import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OtpInput} from '../../components/OtpInput';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'VerificationCode'>;

export function VerificationCodeScreen({navigation, route}: Props) {
  const {email} = route.params;
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>4 haneli kodu girin</Text>

        <Text style={styles.description}>
          Mail adresinize{' '}
          <Text style={styles.email}>{email}</Text> gelen 4 haneli kodu girin.
        </Text>

        <OtpInput value={code} onChange={setCode} />

        <Pressable style={styles.resendLink}>
          <Text style={styles.resendText}>
            Kod almadın mı? <Text style={styles.resendBold}>Tekrar gönder</Text>
          </Text>
        </Pressable>

        <PrimaryButton
          title="Devam Et"
          onPress={() => navigation.navigate('ResetPassword')}
          disabled={code.length < 4}
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
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  email: {
    color: colors.text,
    fontWeight: '600',
  },
  resendLink: {
    alignItems: 'center',
    marginBottom: 32,
  },
  resendText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  resendBold: {
    color: colors.primary,
    fontWeight: '600',
  },
});
