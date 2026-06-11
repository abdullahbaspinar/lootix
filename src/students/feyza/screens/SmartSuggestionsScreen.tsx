import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';

const DW = 430;
const {width: SW} = Dimensions.get('window');
const s = (v: number) => v * (SW / DW);

const C = {
  bg: '#B3B3B3', card: '#EBEBEB', white: '#FFFDFD',
  red: '#B90000', title: '#605C5C', gray: '#706D6D', gray9B: '#9B9B9B', darkRed: '#2B0101',
};

type Props = NativeStackScreenProps<RootStackParamList, 'SmartSuggestions'>;

export function SmartSuggestionsScreen({navigation}: Props) {
  return (
    <View style={{flex: 1, backgroundColor: C.bg}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: s(87)}}>
        <View style={{width: SW, height: s(932), backgroundColor: C.bg}}>

          <TouchableOpacity onPress={() => navigation.goBack()}
            style={[st.abs, {left: s(55), top: s(66), width: s(48), height: s(48), justifyContent: 'center', alignItems: 'center'}]}>
            <Svg width={s(48)} height={s(48)} viewBox="0 0 24 24">
              <Path d="M15 4 L7 12 L15 20" stroke="#D9D9D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </Svg>
          </TouchableOpacity>

          <Image source={require('../assets/images/app_logo.png')}
            style={[st.abs, {left: s(165), top: s(66), width: s(100), height: s(57)}]} resizeMode="contain" />

          <View style={[st.abs, {left: 0, top: s(133), width: SW, height: s(799), backgroundColor: C.card, borderTopLeftRadius: s(24), borderTopRightRadius: s(24)}]} />

          <View style={[st.abs, {left: s(20), top: s(162), width: s(391), height: s(431), backgroundColor: C.white, borderRadius: s(20)}]} />

          <Text style={[st.abs, st.secTitle, {left: s(51), top: s(181)}]}>Analiz</Text>
          <View style={[st.abs, {left: s(46), top: s(215), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Image source={require('../assets/images/ana_pubg.png')}
            style={[st.abs, {left: s(51), top: s(255), width: s(53), height: s(53)}]} resizeMode="contain" />
          <Text style={[st.abs, st.rowLabel, {left: s(118), top: s(259), width: s(258), fontSize: s(13), lineHeight: s(18)}]}>
            Bu ay en fazla harcama yaptığın oyun :
          </Text>
          <Text style={[st.abs, st.rowValue, {left: s(118), top: s(277)}]}>PUBG</Text>
          <View style={[st.abs, {left: s(41), top: s(319), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Image source={require('../assets/images/ana_alert.png')}
            style={[st.abs, {left: s(55), top: s(335), width: s(37), height: s(51)}]} resizeMode="contain" />
          <Text style={[st.abs, st.numBig, {left: s(152), top: s(341)}]}>3</Text>
          <Text style={[st.abs, st.numBig, {left: s(218), top: s(341)}]}>4</Text>
          <Text style={[st.abs, st.rowLabel, {left: s(118), top: s(352), width: s(284)}]}>
            Son          günde         satın alım yaptın
          </Text>
          <View style={[st.abs, {left: s(38), top: s(395), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Image source={require('../assets/images/ana_clock.png')}
            style={[st.abs, {left: s(47), top: s(418), width: s(47), height: s(47)}]} resizeMode="contain" />
          <Text style={[st.abs, st.rowLabel, {left: s(118), top: s(420), width: s(258)}]}>
            <Text style={st.geceStyle}>Gece</Text>
            {' saatlerinde daha  fazla\nharcama yapıyorsun'}
          </Text>
          <View style={[st.abs, {left: s(36), top: s(483), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Image source={require('../assets/images/ana_stats.png')}
            style={[st.abs, {left: s(47), top: s(497), width: s(50), height: s(48)}]} resizeMode="contain" />
          <Text style={[st.abs, st.rowLabel, {left: s(118), top: s(487), width: s(244)}]}>
            {'Bu ay harcamalarını '}
            <Text style={st.redBold20}>%30</Text>
            {' azaltarak '}
            <Text style={st.redBold20}>₺300</Text>
            {' tasarruf ettin'}
          </Text>

          <View style={[st.abs, {left: s(20), top: s(634), width: s(391), height: s(252), backgroundColor: C.white, borderRadius: s(20)}]} />

          <Text style={[st.abs, st.secTitle, {left: s(48), top: s(659)}]}>Akıllı Öneriler</Text>
          <View style={[st.abs, {left: s(51), top: s(693), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Text style={[st.abs, st.offerText, {left: s(53), top: s(710), width: s(344)}]}>
            Bu ay yaptığın skin harcamalarıyla .... hedefini satın alabilirdin
          </Text>
          <View style={[st.abs, {left: s(50), top: s(773), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Text style={[st.abs, st.offerBold, {left: s(52), top: s(787)}]}>Cuma Günleri Dikkat!</Text>
          <Text style={[st.abs, st.offerText, {left: s(53), top: s(813), width: s(330)}]}>
            Cuma günleri ortalama 150 ₺ harcıyorsunuz. Bu gün özellikle bütçe takibi yapın
          </Text>

        </View>
      </ScrollView>

      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <BottomTabBar activeTab="chart1" onTabPress={tab => handleTabPress(navigation, tab)} />
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  abs: {position: 'absolute'},
  secTitle:  {fontFamily: 'PixelifySans_600SemiBold', fontSize: s(25), color: C.title},
  rowLabel:  {fontFamily: 'PixelifySans_700Bold', fontSize: s(14), color: C.gray, lineHeight: s(20)},
  rowValue:  {fontFamily: 'PixelifySans_700Bold', fontSize: s(20), color: C.red},
  numBig:    {fontFamily: 'PixelifySans_700Bold', fontSize: s(27), color: C.red},
  geceStyle: {fontFamily: 'PixelifySans_700Bold', fontSize: s(16), color: C.red},
  redBold20: {fontFamily: 'PixelifySans_700Bold', fontSize: s(20), color: C.red},
  offerText: {fontFamily: 'PixelifySans_400Regular', fontSize: s(15), color: C.gray, lineHeight: s(21)},
  offerBold: {fontFamily: 'PixelifySans_700Bold', fontSize: s(15), color: C.darkRed},
});
