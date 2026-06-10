import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {ToggleSwitch} from '../components/ToggleSwitch';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export function SettingsScreen({navigation}: Props) {
  const [notifications, setNotifications] = useState(true);
  const [appearance, setAppearance] = useState(false);

  return (
    <View style={styles.container}>
      <ScreenHeader onBack={() => navigation.goBack()} showLogo={false} />
      <Text style={styles.title}>Ayarlar</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.label}>Bildirimler</Text>
          <ToggleSwitch
            value={notifications}
            onToggle={() => setNotifications(v => !v)}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Görünüm</Text>
          <ToggleSwitch
            value={appearance}
            onToggle={() => setAppearance(v => !v)}
            activeColor={colors.primary}
          />
        </View>

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
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 2,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  arrow: {
    fontSize: 22,
    color: colors.textSecondary,
    fontWeight: '300',
  },
});
