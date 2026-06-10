import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {PrimaryButton} from '../../abdullah/components/PrimaryButton';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'CategorySelection'>;

const CATEGORIES = [
  {id: 'lootbox', name: 'Lootbox', icon: '🎁', defaultAmount: '200'},
  {id: 'skin', name: 'Skin', icon: '👕', defaultAmount: ''},
  {id: 'battlepass', name: 'Battle Pass', icon: '🎫', defaultAmount: ''},
  {id: 'other', name: 'Diğer', icon: '📦', defaultAmount: ''},
];

export function CategorySelectionScreen({navigation, route}: Props) {
  const {gameName} = route.params;
  const [amounts, setAmounts] = useState<Record<string, string>>({
    lootbox: '200',
    skin: '',
    battlepass: '',
    other: '',
  });

  const updateAmount = (id: string, value: string) => {
    setAmounts(prev => ({...prev, [id]: value}));
  };

  const hasAmount = Object.values(amounts).some(v => v.trim() !== '');

  return (
    <View style={styles.container}>
      <ScreenHeader
        onBack={() => navigation.goBack()}
        showLogo={false}
      />
      <Text style={styles.title}>Kategori Seç</Text>
      <Text style={styles.subtitle}>{gameName}</Text>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Harcama Türü</Text>

        {CATEGORIES.map(category => (
          <View key={category.id} style={styles.categoryRow}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
            <View style={styles.amountBox}>
              <TextInput
                style={styles.amountInput}
                value={amounts[category.id]}
                onChangeText={v => updateAmount(category.id, v)}
                keyboardType="numeric"
                placeholder="000"
                placeholderTextColor={colors.placeholder}
              />
              <Text style={styles.currency}>₺</Text>
            </View>
          </View>
        ))}

        <PrimaryButton
          title="Kaydet"
          onPress={() => navigation.navigate('Home')}
          disabled={!hasAmount}
          style={styles.saveButton}
        />
      </ScrollView>

      <BottomTabBar
        activeTab="home"
        onTabPress={tab => handleTabPress(navigation, tab)}
      />
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  amountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 10,
    minWidth: 90,
  },
  amountInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'right',
  },
  currency: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  saveButton: {
    marginTop: 16,
  },
});
