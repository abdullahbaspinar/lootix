import {ImageSourcePropType} from 'react-native';

export type TabName = 'list' | 'chart1' | 'home' | 'chart2' | 'settings';

export const NAVBAR_ICONS: Record<TabName, ImageSourcePropType> = {
  list: require('../assets/navbar/Hedefler.png'),
  chart1: require('../assets/navbar/istatistik.png'),
  home: require('../assets/navbar/Home.png'),
  chart2: require('../assets/navbar/ilerleme.png'),
  settings: require('../assets/navbar/ayarlar.png'),
};
