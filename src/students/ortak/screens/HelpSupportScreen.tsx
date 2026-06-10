import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'HelpSupport'>;

export function HelpSupportScreen({navigation}: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />
      <Text style={styles.title}>Yardım & Destek</Text>

      <Text style={styles.text}>
        Lootix uygulaması ile ilgili her türlü soru, öneri ve destek talepleriniz
        için bizimle iletişime geçebilirsiniz.
      </Text>
      <Text style={styles.text}>
        Ekibimiz en kısa sürede size geri dönüş yapacaktır.
      </Text>
      <Text style={styles.email}>abdullahbaspinar@gmail.com</Text>
    </ScrollView>
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
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  email: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
    marginTop: 8,
  },
});
