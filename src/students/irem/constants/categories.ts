import {ImageSourcePropType} from 'react-native';

export type CategoryItem = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const CATEGORIES: CategoryItem[] = [
  {id: 'lootbox', name: 'Lootbox', image: require('../assets/lootbox.png')},
  {id: 'skin', name: 'Skin', image: require('../assets/skin.png')},
  {id: 'battlepass', name: 'Battle Pass', image: require('../assets/battlepass.png')},
  {id: 'diger', name: 'Diğer', image: require('../assets/diger.png')},
];
