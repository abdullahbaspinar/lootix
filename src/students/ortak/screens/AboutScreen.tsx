import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export function AboutScreen({navigation}: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />
      <Text style={styles.title}>Hakkımızda</Text>

      <Text style={styles.text}>
        Lootix, oyun harcamalarınızı takip etmenizi ve bilinçli finansal
        kararlar almanızı sağlayan bir mobil uygulamadır.
      </Text>
      <Text style={styles.text}>
        Oyun içi satın alımlarınızı kategorilere ayırın, aylık grafiklerle
        harcama alışkanlıklarınızı analiz edin ve hedeflerinize ulaşın.
      </Text>

      <Text style={styles.teamTitle}>Geliştirme Ekibi</Text>
      <Text style={styles.teamMember}>Prof. Dr. Erkan Şahin</Text>
      <Text style={styles.teamMember}>Abdullah Başpınar</Text>
      <Text style={styles.teamMember}>Feyza Dönmez</Text>
      <Text style={styles.teamMember}>İrem Yılmaz</Text>
      <Text style={styles.teamMember}>Mustafa Değer</Text>

      <Text style={styles.copyright}>© 2024 Lootix. Tüm hakları saklıdır.</Text>
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
    marginBottom: 24,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  teamTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
  },
  teamMember: {
    fontSize: 14,
    color: colors.textSecondary,
    paddingHorizontal: 24,
    marginBottom: 6,
  },
  copyright: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
