import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Checkbox} from '../../components/Checkbox';
import {InputField} from '../../components/InputField';
import {LockIcon, MailIcon, UserIcon} from '../../components/Icons';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export function SignUpScreen({navigation}: Props) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kayıt Ol</Text>

        <InputField
          label="İsim Soyisim"
          placeholder="Ad Soyad"
          leftIcon={<UserIcon />}
        />
        <InputField
          label="Mail Adresi"
          placeholder="ornek@mail.com"
          keyboardType="email-address"
          leftIcon={<MailIcon />}
        />
        <InputField
          label="Şifre"
          placeholder="••••••••"
          isPassword
          leftIcon={<LockIcon />}
        />
        <InputField
          label="Şifreyi Onayla"
          placeholder="••••••••"
          isPassword
          leftIcon={<LockIcon />}
        />

        <Checkbox
          checked={termsAccepted}
          onToggle={() => setTermsAccepted(v => !v)}
          label="Kullanım koşullarını okudum, onaylıyorum"
        />

        <PrimaryButton
          title="Kayıt Ol"
          onPress={() => {}}
          disabled={!termsAccepted}
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
    marginBottom: 32,
  },
});
