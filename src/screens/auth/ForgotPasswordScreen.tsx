import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {InputField} from '../../components/InputField';
import {MailIcon} from '../../components/Icons';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({navigation}: Props) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Şifremi Unuttum</Text>

        <Text style={styles.description}>
          Doğrulama işlemi için mail adresinizi girin, mail adresinize
          doğrulama için 4 haneli bir kod göndereceğiz.
        </Text>

        <InputField
          label="Mail Adresi"
          placeholder="ornek@mail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          leftIcon={<MailIcon />}
        />

        <PrimaryButton
          title="Devam Et"
          onPress={() =>
            navigation.navigate('VerificationCode', {email: email || 'user@email.com'})
          }
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
});
