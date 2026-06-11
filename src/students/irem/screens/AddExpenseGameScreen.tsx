import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {ALL_GAMES, FREQUENT_GAMES, GameItem} from '../constants/games';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddExpenseGame'>;

export function AddExpenseGameScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  const handleGameSelect = (game: GameItem) => {
    navigation.navigate('CategorySelection', {
      gameId: game.id,
      gameName: game.name,
    });
  };

  const renderGame = (game: GameItem) => (
    <TouchableOpacity
      key={game.id}
      style={styles.gameButton}
      onPress={() => handleGameSelect(game)}>
      <View style={styles.imageContainer}>
        <Image source={game.image} style={styles.gameImage} />
      </View>
      <Text style={styles.gameName} numberOfLines={1}>
        {game.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainWhiteCard}>
          <View style={styles.titleRow}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Text style={styles.backArrow}>〈</Text>
            </Pressable>
            <Text style={styles.mainTitle}>Harcama Ekle</Text>
          </View>

          <Text style={styles.sectionTitle}>En Sık Oynanan Oyunlar</Text>
          <View style={styles.gameGrid}>
            {FREQUENT_GAMES.map(renderGame)}
          </View>

          <Text style={styles.sectionTitle}>Tüm Oyunlar</Text>
          <View style={styles.gameGrid}>{ALL_GAMES.map(renderGame)}</View>

          <Pressable
            style={styles.addGameLink}
            onPress={() => navigation.navigate('AddGame')}>
            <Text style={styles.addGameText}>+ Oyun Ekle</Text>
          </Pressable>
        </View>
      </ScrollView>
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mainWhiteCard: {
    backgroundColor: '#EAEAEA',
    borderRadius: 30,
    padding: 20,
    margin: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  backButton: {
    marginRight: 15,
    padding: 4,
  },
  backArrow: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.text,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 15,
    marginTop: 5,
  },
  gameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gameButton: {
    width: '47%',
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 8,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gameName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginTop: -13,
    paddingHorizontal: 4,
  },
  addGameLink: {
    alignSelf: 'center',
    marginTop: 8,
    paddingVertical: 10,
  },
  addGameText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
});
