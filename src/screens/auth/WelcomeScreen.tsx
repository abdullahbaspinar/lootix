import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Logo} from '../../components/Logo';
import {PrimaryButton} from '../../components/PrimaryButton';
import {SecondaryButton} from '../../components/SecondaryButton';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo size="large" />
      </View>

      <View style={styles.buttons}>
        <PrimaryButton
          title="Giriş Yap"
          onPress={() => navigation.navigate('Login')}
        />
        <SecondaryButton
          title="Kayıt Ol"
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signUpButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    paddingBottom: 48,
    gap: 16,
  },
  signUpButton: {
    marginTop: 0,
  },
});
