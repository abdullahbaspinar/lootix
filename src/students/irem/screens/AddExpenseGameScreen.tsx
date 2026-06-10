import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {GAMES, Game} from '../../abdullah/constants/games';
import {ScreenHeader} from '../../abdullah/components/ScreenHeader';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';
import {GameGrid, GameRow, SectionTitle} from '../components/GameGrid';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddExpenseGame'>;

const FREQUENT_GAMES = GAMES.slice(0, 3);

export function AddExpenseGameScreen({navigation}: Props) {
  const [selected, setSelected] = useState<Game | null>(null);

  const handleSelect = (game: Game) => {
    setSelected(game);
    navigation.navigate('CategorySelection', {
      gameId: game.id,
      gameName: game.name,
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        onBack={() => navigation.goBack()}
        showLogo={false}
      />
      <Text style={styles.title}>Harcama Ekle</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <SectionTitle title="En Sık Oynanan Oyunlar" />
        <GameRow games={FREQUENT_GAMES} onSelect={handleSelect} />

        <SectionTitle title="Tüm Oyunlar" />
        <GameGrid
          games={GAMES}
          selectedId={selected?.id}
          onSelect={handleSelect}
          style={styles.grid}
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
    marginBottom: 16,
  },
  content: {
    paddingBottom: 100,
  },
  grid: {
    paddingHorizontal: 20,
  },
});
