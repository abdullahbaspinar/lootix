import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {GAMES} from '../../abdullah/constants/games';
import {LogoPageLayout} from '../../abdullah/components/LogoPageLayout';
import {PrimaryButton} from '../../abdullah/components/PrimaryButton';
import {colors as abdullahColors} from '../../abdullah/constants/colors';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';
import {GameRow, SectionTitle} from '../components/GameGrid';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddGame'>;

const FREQUENT_GAMES = GAMES.slice(0, 3);

export function AddGameScreen({navigation}: Props) {
  const [gameName, setGameName] = useState('Candy Crush');

  return (
    <View style={styles.container}>
      <LogoPageLayout>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Oyun Ekle</Text>

          <SectionTitle title="En Sık Oynanan Oyunlar" />
          <GameRow games={FREQUENT_GAMES} />

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.nameInput}
              value={gameName}
              onChangeText={setGameName}
              placeholder="Oyun adı"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <Pressable style={styles.uploadArea}>
            <Text style={styles.uploadIcon}>🖼</Text>
            <Text style={styles.uploadText}>Görsel Ekle</Text>
          </Pressable>

          <PrimaryButton
            title="Kaydet"
            onPress={() => navigation.navigate('Home')}
            style={styles.saveButton}
          />
        </ScrollView>
      </LogoPageLayout>

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
    backgroundColor: abdullahColors.headerGray,
  },
  content: {
    paddingBottom: 100,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.card,
  },
  uploadArea: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    backgroundColor: colors.card,
  },
  uploadIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  saveButton: {
    marginTop: 8,
  },
});
