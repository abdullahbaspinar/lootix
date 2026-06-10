import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Game} from '../../abdullah/constants/games';
import {colors} from '../constants/colors';

type GameGridProps = {
  games: Game[];
  selectedId?: string;
  onSelect?: (game: Game) => void;
  numColumns?: number;
  style?: ViewStyle;
};

export function GameGrid({
  games,
  selectedId,
  onSelect,
  numColumns = 4,
  style,
}: GameGridProps) {
  const rows: Game[][] = [];
  for (let i = 0; i < games.length; i += numColumns) {
    rows.push(games.slice(i, i + numColumns));
  }

  return (
    <View style={style}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(item => {
            const isSelected = selectedId === item.id;
            return (
              <Pressable
                key={item.id}
                style={[styles.item, isSelected && styles.itemSelected]}
                onPress={() => onSelect?.(item)}>
                <Image source={item.image} style={styles.image} />
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

type GameRowProps = {
  games: Game[];
  onSelect?: (game: Game) => void;
};

export function GameRow({games, onSelect}: GameRowProps) {
  return (
    <View style={styles.rowContainer}>
      {games.map(game => (
        <Pressable
          key={game.id}
          style={styles.rowItem}
          onPress={() => onSelect?.(game)}>
          <Image source={game.image} style={styles.rowImage} />
        </Pressable>
      ))}
    </View>
  );
}

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({title}: SectionTitleProps) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  item: {
    width: 72,
    height: 72,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 8,
  },
  itemSelected: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  rowItem: {
    width: 64,
    height: 64,
    borderRadius: 14,
    overflow: 'hidden',
  },
  rowImage: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 8,
  },
});
