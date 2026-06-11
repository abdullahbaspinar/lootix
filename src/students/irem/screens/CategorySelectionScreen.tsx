import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {CATEGORIES} from '../constants/categories';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'CategorySelection'>;

export function CategorySelectionScreen({navigation, route}: Props) {
  const insets = useSafeAreaInsets();
  const {gameId, gameName} = route.params;
  const [selectedCategory, setSelectedCategory] = useState('Lootbox');

  const handleConfirm = () => {
    navigation.navigate('AddAmount', {
      gameId,
      gameName,
      category: selectedCategory,
    });
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonAbsolute}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>〈</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <View style={styles.categoryMainWhiteCard}>
          <View>
            <Text style={styles.categoryMainTitle}>Kategori Seç</Text>
            <Text style={styles.categorySubTitle}>Harcama Türü</Text>
            <View style={styles.categoryList}>
              {CATEGORIES.map(cat => {
                const isSelected = selectedCategory === cat.name;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    style={[styles.categoryRow, isSelected && styles.selectedRow]}
                    onPress={() => setSelectedCategory(cat.name)}>
                    <View style={styles.categoryInfo}>
                      <Image source={cat.image} style={styles.categoryIcon} />
                      <Text style={styles.categoryName}>{cat.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleConfirm}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 110,
    backgroundColor: colors.headerGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'relative',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 20,
    position: 'absolute',
  },
  backButtonAbsolute: {
    position: 'absolute',
    left: 20,
    marginTop: 20,
    padding: 10,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    padding: 16,
    paddingTop: 15,
    flex: 1,
  },
  categoryMainWhiteCard: {
    backgroundColor: colors.cardMuted,
    borderRadius: 30,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  categoryMainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 5,
  },
  categorySubTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 15,
  },
  categoryList: {
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  selectedRow: {
    backgroundColor: 'rgba(191, 9, 9, 0.08)',
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 15,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    elevation: 3,
  },
  saveButtonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
