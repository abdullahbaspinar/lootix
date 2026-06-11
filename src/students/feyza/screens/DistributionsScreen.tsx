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
  bg: '#B3B3B3', card: '#EBEBEB', white: '#FFFDFD', black: '#000000',
  gray9B: '#9B9B9B', pubg: '#FF0C0C', lol: '#9C0003', clash: '#2C0E0E',
  skin: '#B20909', loot: '#F13A3A', bpass: '#E15656', other: '#A09999',
  catBg: 'rgba(224,224,224,0.4)',
};

function polarToXY(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg - 90) * (Math.PI / 180);
  return {x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad)};
}

function donutSlice(cx: number, cy: number, ro: number, ri: number, start: number, end: number) {
  const o1 = polarToXY(cx, cy, ro, start);
  const o2 = polarToXY(cx, cy, ro, end);
  const i1 = polarToXY(cx, cy, ri, end);
  const i2 = polarToXY(cx, cy, ri, start);
  const large = end - start > 180 ? 1 : 0;
  return `M${o1.x} ${o1.y} A${ro} ${ro} 0 ${large} 1 ${o2.x} ${o2.y} L${i1.x} ${i1.y} A${ri} ${ri} 0 ${large} 0 ${i2.x} ${i2.y} Z`;
}

function DonutChart({size}: {size: number}) {
  const cx = size / 2, cy = size / 2;
  const ro = size / 2, ri = size * 0.42;
  const gap = 2;
  const slices = [
    {color: '#FF0C0C', from: 0 + gap,   to: 180 - gap},
    {color: '#9C0003', from: 180 + gap, to: 277 - gap},
    {color: '#2C0E0E', from: 277 + gap, to: 360 - gap},
  ];
  return (
    <Svg width={size} height={size}>
      {slices.map((sl, i) => (
        <Path key={i} d={donutSlice(cx, cy, ro, ri, sl.from, sl.to)} fill={sl.color} />
      ))}
    </Svg>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'Distributions'>;

export function DistributionsScreen({navigation}: Props) {
  return (
    <View style={{flex: 1, backgroundColor: C.bg}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: s(87)}}>
        <View style={{width: SW, height: s(932), backgroundColor: C.bg}}>

          <TouchableOpacity onPress={() => navigation.goBack()}
            style={[st.abs, {left: s(30), top: s(64), width: s(54), height: s(54), justifyContent: 'center', alignItems: 'center'}]}>
            <Svg width={s(54)} height={s(54)} viewBox="0 0 24 24">
              <Path d="M15 4 L7 12 L15 20" stroke="#DEDEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </Svg>
          </TouchableOpacity>

          <Image source={require('../assets/images/app_logo.png')}
            style={[st.abs, {left: s(165), top: s(66), width: s(100), height: s(57)}]} resizeMode="contain" />

          <View style={[st.abs, {left: 0, top: s(133), width: SW, height: s(799), backgroundColor: C.card, borderTopLeftRadius: s(24), borderTopRightRadius: s(24)}]} />
          <View style={[st.abs, {left: s(20), top: s(162), width: s(390), height: s(335), backgroundColor: C.white, borderRadius: s(20)}]} />

          <Text style={[st.abs, st.secTitle, {left: s(43), top: s(178), width: s(304)}]}>Oyunlara Göre Dağılımlar</Text>
          <View style={[st.abs, {left: s(49), top: s(211), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <View style={[st.abs, {left: s(163), top: s(240)}]}><DonutChart size={s(106)} /></View>

          <View style={[st.abs, {left: s(93), top: s(386), flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{width: s(12.57), height: s(12.57), borderRadius: s(6.3), backgroundColor: C.pubg, marginTop: s(3.33)}} />
            <Text style={[st.gameText, {color: C.pubg, marginLeft: s(6)}]}>PUBG                   ( 623 ₺ )</Text>
          </View>
          <View style={[st.abs, {left: s(93), top: s(417), flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{width: s(12.57), height: s(12.57), borderRadius: s(6.3), backgroundColor: C.lol, marginTop: s(3.73)}} />
            <Text style={[st.gameText, {color: C.lol, marginLeft: s(6)}]}>LOL                       ( 343 ₺ )</Text>
          </View>
          <View style={[st.abs, {left: s(93), top: s(449), flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{width: s(12.57), height: s(12.57), borderRadius: s(6.3), backgroundColor: C.clash, marginTop: s(3.12)}} />
            <Text style={[st.gameText, {color: C.clash, marginLeft: s(6)}]}>Clash Royale      ( 310.5 ₺ )</Text>
          </View>

          <View style={[st.abs, {left: s(20), top: s(525), width: s(390), height: s(359), backgroundColor: C.white, borderRadius: s(20)}]} />
          <Text style={[st.abs, st.secTitle, {left: s(41), top: s(543), width: s(349)}]}>Kategorilere Göre Dağılımlar</Text>
          <View style={[st.abs, {left: s(50), top: s(580), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <View style={[st.abs, {left: s(78),  top: s(593), width: s(15), height: s(135), backgroundColor: C.skin,  borderRadius: s(4)}]} />
          <View style={[st.abs, {left: s(162), top: s(641), width: s(15), height: s(87),  backgroundColor: C.loot,  borderRadius: s(4)}]} />
          <View style={[st.abs, {left: s(246), top: s(671), width: s(15), height: s(57),  backgroundColor: C.bpass, borderRadius: s(4)}]} />
          <View style={[st.abs, {left: s(330), top: s(689), width: s(15), height: s(39),  backgroundColor: C.other, borderRadius: s(4)}]} />

          <View style={[st.abs, {left: s(46), top: s(752), width: s(338), height: 1, backgroundColor: C.gray9B}]} />
          <Text style={[st.abs, st.dots, {left: s(334), top: s(746)}]}>...</Text>

          <View style={[st.abs, {left: s(46),  top: s(794), width: s(80), height: s(80), backgroundColor: C.catBg, borderRadius: s(16)}]} />
          <View style={[st.abs, {left: s(131), top: s(794), width: s(78), height: s(80), backgroundColor: C.catBg, borderRadius: s(16)}]} />
          <View style={[st.abs, {left: s(216), top: s(791), width: s(84), height: s(83), backgroundColor: C.catBg, borderRadius: s(16)}]} />
          <View style={[st.abs, {left: s(307), top: s(795), width: s(76), height: s(78), backgroundColor: C.catBg, borderRadius: s(16)}]} />

          <Image source={require('../assets/images/icon_lootbox.png')} style={[st.abs, {left: s(67),  top: s(758), width: s(36), height: s(29)}]} resizeMode="contain" />
          <Image source={require('../assets/images/icon_skin.png')}    style={[st.abs, {left: s(158), top: s(758), width: s(27), height: s(29)}]} resizeMode="contain" />
          <Image source={require('../assets/images/icon_bpass.png')}   style={[st.abs, {left: s(242), top: s(757), width: s(32), height: s(30)}]} resizeMode="contain" />

          <Text style={[st.abs, st.catName,   {left: s(55),  top: s(799)}]}>Lootbox</Text>
          <Text style={[st.abs, st.catName,   {left: s(153), top: s(799)}]}>Skin</Text>
          <Text style={[st.abs, st.catNameSm, {left: s(222), top: s(800)}]}>Battle Pass</Text>
          <Text style={[st.abs, st.catName,   {left: s(326), top: s(799)}]}>Diğer</Text>

          <View style={[st.abs, {left: s(46), top: s(820), width: s(338), height: 1, backgroundColor: C.gray9B}]} />
          <Text style={[st.abs, st.pct, {left: s(61),  top: s(824), color: C.skin }]}>%50</Text>
          <Text style={[st.abs, st.pct, {left: s(147), top: s(824), color: C.loot }]}>%25</Text>
          <Text style={[st.abs, st.pct, {left: s(238), top: s(824), color: C.bpass}]}>%16</Text>
          <Text style={[st.abs, st.pct, {left: s(329), top: s(824), color: C.other}]}>%9</Text>

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
  secTitle:  {fontFamily: 'PixelifySans_400Regular', fontSize: s(25), fontWeight: '600', color: '#585858', textAlign: 'center'},
  gameText:  {fontSize: s(17), fontWeight: '400'},
  catName:   {fontFamily: 'PixelifySans_700Bold', fontSize: s(15), color: '#000000', lineHeight: s(21)},
  catNameSm: {fontFamily: 'PixelifySans_700Bold', fontSize: s(13), color: '#000000', lineHeight: s(18)},
  pct:       {fontWeight: '700', fontSize: s(20), lineHeight: s(28)},
  dots:      {fontFamily: 'PixelifySans_700Bold', fontSize: s(30), color: '#000000', lineHeight: s(42)},
});
