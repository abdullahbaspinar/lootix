import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Switch } from 'react-native';

export function SettingsScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(true);
  const [appearance, setAppearance] = useState(false);

  // Geri dönüş köprüsü
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

      <Text style={styles.title}>Ayarlar</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bildirimler Satırı */}
        <View style={styles.row}>
          <Text style={styles.label}>Bildirimler</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#BF0909' }}
            thumbColor={notifications ? '#FFFFFF' : '#f4f3f4'}
            onValueChange={() => setNotifications(v => !v)}
            value={notifications}
          />
        </View>

        {/* Görünüm Satırı */}
        <View style={styles.row}>
          <Text style={styles.label}>Görünüm (Koyu Tema)</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#BF0909' }}
            thumbColor={appearance ? '#FFFFFF' : '#f4f3f4'}
            onValueChange={() => setAppearance(v => !v)}
            value={appearance}
          />
        </View>

        {/* Veri & Gizlilik Satırı */}
        <Pressable style={styles.linkRow}>
          <Text style={styles.label}>Veri & Gizlilik</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  arrow: {
    fontSize: 22,
    color: '#A6A6A6',
    fontWeight: '300',
  },
});