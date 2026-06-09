import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PaginationDots} from '../../components/PaginationDots';
import {PrimaryButton} from '../../components/PrimaryButton';
import {colors} from '../../constants/colors';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const ONBOARDING_DATA = [
  {
    image: require('../../../assets/onboarding1.png'),
    text: 'Oyunlarda yaptığın küçük harcamaları fark etmeden büyür. Gerçekte ne kadar gittiğini görmek ister misin?',
    button: 'İlerle',
  },
  {
    image: require('../../../assets/onboarding2.png'),
    text: 'Oynadığın oyunları seç, yaptığın harcamaları kolayca ekle. Skin, lootbox ve diğer satın alımlarını düzenli şekilde takip et.',
    button: 'İlerle',
  },
  {
    image: require('../../../assets/onboarding3.png'),
    text: 'Aylık grafikler ve analizlerle harcama alışkanlıklarını keşfet. Gereksiz harcamaları azalt, daha bilinçli kararlar ver.',
    button: 'Başla',
  },
];

export function OnboardingScreen({navigation}: Props) {
  const [step, setStep] = useState(0);
  const current = ONBOARDING_DATA[step];

  const handleNext = () => {
    if (step < ONBOARDING_DATA.length - 1) {
      setStep(s => s + 1);
    } else {
      navigation.replace('Welcome');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={current.image}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.text}>{current.text}</Text>

      <PaginationDots total={ONBOARDING_DATA.length} activeIndex={step} />

      <View style={styles.buttonContainer}>
        <PrimaryButton title={current.button} onPress={handleNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  illustrationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  illustration: {
    width: '85%',
    height: '80%',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 32,
    fontWeight: '500',
  },
  buttonContainer: {
    paddingBottom: 40,
    paddingTop: 8,
  },
});
