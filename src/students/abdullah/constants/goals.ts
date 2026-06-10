import {ImageSourcePropType} from 'react-native';

export type Goal = {
  id: string;
  name: string;
  price: number;
  savedAmount: number;
  progress: number;
  image: ImageSourcePropType;
};

export const SAMPLE_GOALS: Goal[] = [
  {
    id: '1',
    name: 'Araba Skini',
    price: 250,
    savedAmount: 175,
    progress: 70,
    image: require('../assets/game/pubg.png'),
  },
  {
    id: '2',
    name: 'Karakter Skini',
    price: 180,
    savedAmount: 54,
    progress: 30,
    image: require('../assets/game/valorant.png'),
  },
  {
    id: '3',
    name: 'Battle Pass',
    price: 120,
    savedAmount: 120,
    progress: 100,
    image: require('../assets/game/lol.png'),
  },
];
