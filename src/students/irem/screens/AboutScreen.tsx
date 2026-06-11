import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

export function AboutScreen({ navigation }: any) {
  const goBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.headerBar}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Text style={styles.backArrow}>〈 Geri</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
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
        <Text style={styles.teamMember}>Prof. Dr. Güldem Alev Özkök</Text>
        <Text style={styles.teamMember}>Abdullah Başpınar</Text>
        <Text style={styles.teamMember}>Feyza Dönmez</Text>
        <Text style={styles.teamMember}>İrem Yılmaz</Text>
        <Text style={styles.teamMember}>Mustafa Değer</Text>

        <Text style={styles.copyright}>© 2026 Lootix. Tüm hakları saklıdır.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#A6A6A6',
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    paddingBottom: 40,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 24,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: '#1A1A1A',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  teamTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
  },
  teamMember: {
    fontSize: 14,
    color: '#555555',
    paddingHorizontal: 24,
    marginBottom: 6,
  },
  copyright: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});