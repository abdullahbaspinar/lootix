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
import {getGameById} from '../constants/games';
import {colors} from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'AddAmount'>;

export function AddAmountScreen({navigation, route}: Props) {
  const insets = useSafeAreaInsets();
  const {gameId, gameName, category} = route.params;
  const [amount, setAmount] = useState('');

  const game = getGameById(gameId);
  const gameImage = game?.image ?? require('../assets/pubg.png');

  const handleKeyboardPress = (value: string) => {
    if (amount.length >= 5) {
      return;
    }
    setAmount(prev => prev + value);
  };

  const handleKeyboardDelete = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    const parsed = parseFloat(amount);
    if (isNaN(parsed) || parsed <= 0) {
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Home', params: {newExpense: parsed}}],
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
        <View style={styles.amountMainCard}>
          <View style={styles.gameInfoRow}>
            <Image source={gameImage} style={styles.selectedGameImage} />
            <Text style={styles.gameTitle}>
              {gameName} - {category} Harcaması
            </Text>
          </View>

          <View style={styles.amountDisplay}>
            <Text style={styles.amountText}>
              {amount === '' ? '0' : amount}
              <Text style={styles.currency}> ₺</Text>
            </Text>
          </View>

          <View style={styles.keyboard}>
            {[['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']].map(
              (row, rowIndex) => (
                <View key={rowIndex} style={styles.keyboardRow}>
                  {row.map(num => (
                    <TouchableOpacity
                      key={num}
                      style={styles.keyButton}
                      onPress={() => handleKeyboardPress(num)}>
                      <Text style={styles.keyText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ),
            )}
            <View style={styles.keyboardRow}>
              <View style={styles.emptyKey} />
              <TouchableOpacity
                style={styles.keyButton}
                onPress={() => handleKeyboardPress('0')}>
                <Text style={styles.keyText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.keyButton, styles.deleteButton]}
                onPress={handleKeyboardDelete}>
                <Text style={styles.deleteKeyText}>⌫</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.confirmButton, amount === '' && styles.disabledButton]}
            onPress={handleConfirm}
            disabled={amount === ''}>
            <Text style={styles.confirmButtonText}>Harcamayı Onayla</Text>
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
  amountMainCard: {
    backgroundColor: '#EAEAEA',
    borderRadius: 30,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gameInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardMuted,
    padding: 12,
    borderRadius: 20,
    marginBottom: 15,
  },
  selectedGameImage: {
    width: 45,
    height: 45,
    borderRadius: 12,
    marginRight: 15,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  amountDisplay: {
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    marginBottom: 15,
  },
  amountText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.primary,
  },
  currency: {
    fontSize: 24,
    color: colors.text,
  },
  keyboard: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  keyButton: {
    backgroundColor: colors.card,
    width: '30%',
    aspectRatio: 1.4,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  emptyKey: {
    width: '30%',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  deleteButton: {
    backgroundColor: '#DCDCDC',
  },
  deleteKeyText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: colors.badge,
  },
  confirmButtonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: '700',
  },
});
