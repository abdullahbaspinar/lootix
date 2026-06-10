import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrimaryButton} from '../../components/PrimaryButton';
import {GAMES} from '../../constants/games';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'GameSelection'>;

const NUM_COLUMNS = 4;

export function GameSelectionScreen({navigation}: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleGame = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const rows: (typeof GAMES)[] = [];
  for (let i = 0; i < GAMES.length; i += NUM_COLUMNS) {
    rows.push(GAMES.slice(i, i + NUM_COLUMNS));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangi oyunları{'\n'}oynuyorsun?</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(item => {
              const isSelected = selected.has(item.id);
              return (
                <Pressable
                  key={item.id}
                  style={styles.gameItem}
                  onPress={() => toggleGame(item.id)}>
                  {isSelected && (
                    <View style={styles.checkBadge}>
                      <Text style={styles.checkMark}>✓</Text>
                    </View>
                  )}
                  <Image source={item.image} style={styles.gameImage} />
                </Pressable>
              );
            })}
            {row.length < NUM_COLUMNS &&
              Array.from({length: NUM_COLUMNS - row.length}).map((_, i) => (
                <View key={`spacer-${i}`} style={styles.gameItemSpacer} />
              ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton
          title="İlerle"
          onPress={() =>
            navigation.navigate('FinancialInput', {
              selectedGames: Array.from(selected),
            })
          }
          disabled={selected.size === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 48,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  gameItem: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  gameItemSpacer: {
    flex: 1,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  checkBadge: {
    position: 'absolute',
    top: 4,
    left: 4,
    zIndex: 1,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '700',
  },
  footer: {
    paddingBottom: 32,
    paddingTop: 8,
  },
});
