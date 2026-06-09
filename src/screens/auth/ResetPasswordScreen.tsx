import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {InputField} from '../../components/InputField';
import {LockIcon} from '../../components/Icons';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;

export function ResetPasswordScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Yeni Şifre Oluştur</Text>

        <InputField
          label="Yeni Şifre"
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

        <PrimaryButton
          title="Şifreyi Güncelle"
          onPress={() => navigation.navigate('PasswordSuccess')}
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
