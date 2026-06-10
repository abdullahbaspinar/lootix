import {NavigationProp} from '@react-navigation/native';
import {TabName} from '../constants/navbar';
import {RootStackParamList} from './types';

export type {TabName};

export function handleTabPress(
  navigation: NavigationProp<RootStackParamList>,
  tab: TabName,
) {
  switch (tab) {
    case 'list':
      navigation.navigate('Goals');
      break;
    case 'chart1':
      navigation.navigate('Analysis');
      break;
    case 'chart2':
      navigation.navigate('Progress');
      break;
    case 'home':
      navigation.navigate('Home');
      break;
    case 'settings':
      navigation.navigate('Profile');
      break;
  }
}
