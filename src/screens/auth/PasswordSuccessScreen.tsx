import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CheckIcon} from '../../components/Icons';
import {PrimaryButton} from '../../components/PrimaryButton';
import {ScreenHeader} from '../../components/ScreenHeader';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'PasswordSuccess'>;

export function PasswordSuccessScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />

      <View style={styles.content}>
        <Text style={styles.title}>Tebrikler. Şifren güncellendi!</Text>

        <View style={styles.iconContainer}>
          <CheckIcon size={40} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Giriş Yap"
          onPress={() => navigation.navigate('Login')}
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    marginBottom: 40,
  },
  buttonContainer: {
    paddingBottom: 48,
  },
});
