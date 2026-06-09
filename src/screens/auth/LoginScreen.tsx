import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Checkbox} from '../../components/Checkbox';
import {InputField} from '../../components/InputField';
import {LockIcon, MailIcon} from '../../components/Icons';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({navigation}: Props) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Giriş Yap</Text>

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

        <View style={styles.optionsRow}>
          <Checkbox
            checked={rememberMe}
            onToggle={() => setRememberMe(v => !v)}
            label="Beni Hatırla"
            compact
          />
          <Pressable
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Şifremi Unuttum</Text>
          </Pressable>
        </View>

        <PrimaryButton title="Giriş Yap" onPress={() => {}} />
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
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,
    marginBottom: 24,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '600',
  },
});
