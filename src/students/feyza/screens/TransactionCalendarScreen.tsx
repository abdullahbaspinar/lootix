import React, {useState} from 'react';
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
  bg: '#B3B3B3', card: '#EBEBEB', white: 'rgba(255,254,254,0.90)',
  black: '#000000', title: '#605C5C', gray9B: '#9B9B9B',
  red: '#B90000', oyunColor: '#555555', katColor: '#B37777',
};

const MONTH_NAMES   = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'];
const DAY_NAMES     = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const FIRST_DAY_MON = [3, 6, 6, 2, 4];
const DAYS_IN_MONTH = [31, 28, 31, 30, 31];

interface Tx {tarih: string; oyun: string; kat: string}
interface MonthData {markedDays: number[]; transactions: Tx[]}

const MONTH_DATA: MonthData[] = [
  {markedDays: [5, 12, 19, 26], transactions: [
    {tarih: '05.01.2026', oyun: 'PUBG',        kat: 'Skin'},
    {tarih: '12.01.2026', oyun: 'LOL',          kat: 'Lootbox'},
    {tarih: '19.01.2026', oyun: 'CLASH ROYALE', kat: 'Battle Pass'},
    {tarih: '26.01.2026', oyun: 'PUBG',         kat: 'Lootbox'},
  ]},
  {markedDays: [3, 10, 17, 24], transactions: [
    {tarih: '03.02.2026', oyun: 'LOL',          kat: 'Skin'},
    {tarih: '10.02.2026', oyun: 'PUBG',         kat: 'Battle Pass'},
    {tarih: '17.02.2026', oyun: 'CLASH ROYALE', kat: 'Lootbox'},
    {tarih: '24.02.2026', oyun: 'LOL',          kat: 'Battle Pass'},
  ]},
  {markedDays: [2, 9, 16, 23, 30], transactions: [
    {tarih: '02.03.2026', oyun: 'CLASH ROYALE', kat: 'Skin'},
    {tarih: '09.03.2026', oyun: 'PUBG',         kat: 'Lootbox'},
    {tarih: '16.03.2026', oyun: 'LOL',          kat: 'Battle Pass'},
    {tarih: '23.03.2026', oyun: 'PUBG',         kat: 'Skin'},
    {tarih: '30.03.2026', oyun: 'CLASH ROYALE', kat: 'Battle Pass'},
  ]},
  {markedDays: [4, 11, 18, 22, 25], transactions: [
    {tarih: '04.04.2026', oyun: 'LOL',          kat: 'Lootbox'},
    {tarih: '11.04.2026', oyun: 'PUBG',         kat: 'Battle Pass'},
    {tarih: '18.04.2026', oyun: 'CLASH ROYALE', kat: 'Skin'},
    {tarih: '22.04.2026', oyun: 'LOL',          kat: 'Skin'},
    {tarih: '25.04.2026', oyun: 'PUBG',         kat: 'Lootbox'},
  ]},
  {markedDays: [2, 8, 10, 13, 22, 25, 28, 29], transactions: [
    {tarih: '02.05.2026', oyun: 'PUBG',         kat: 'Skin'},
    {tarih: '08.05.2026', oyun: 'LOL',          kat: 'Lootbox'},
    {tarih: '10.05.2026', oyun: 'LOL',          kat: 'Lootbox'},
    {tarih: '13.05.2026', oyun: 'PUBG',         kat: 'Lootbox'},
    {tarih: '22.05.2026', oyun: 'CLASH ROYALE', kat: 'Lootbox'},
    {tarih: '25.05.2026', oyun: 'CLASH ROYALE', kat: 'Skin'},
    {tarih: '28.05.2026', oyun: 'PUBG',         kat: 'Skin'},
    {tarih: '29.05.2026', oyun: 'CLASH ROYALE', kat: 'Battle Pass'},
    {tarih: '29.05.2026', oyun: 'PUBG',         kat: 'Battle Pass'},
  ]},
];

function CalendarGrid({monthIdx}: {monthIdx: number}) {
  const firstMon    = FIRST_DAY_MON[monthIdx];
  const daysInMonth = DAYS_IN_MONTH[monthIdx];
  const markedDays  = MONTH_DATA[monthIdx].markedDays;
  const cells: (number | null)[] = [
    ...Array<null>(firstMon).fill(null),
    ...Array.from({length: daysInMonth}, (_, i) => i + 1),
  ];
  const numRows = Math.ceil(cells.length / 7);
  const cellW   = s(377) / 7;
  const headerH = s(24);
  const rowH    = (s(229) - headerH - s(2)) / numRows;

  return (
    <View style={{position: 'absolute', left: s(27), top: s(291), width: s(377), height: s(229)}}>
      <View style={{flexDirection: 'row', height: headerH}}>
        {DAY_NAMES.map((d, i) => (
          <View key={i} style={{width: cellW, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'PixelifySans_700Bold', fontSize: s(10), color: C.gray9B}}>{d}</Text>
          </View>
        ))}
      </View>
      {Array.from({length: numRows}, (_, row) => (
        <View key={row} style={{flexDirection: 'row', height: rowH}}>
          {Array.from({length: 7}, (_, col) => {
            const idx    = row * 7 + col;
            const day    = idx < cells.length ? cells[idx] : null;
            const marked = day !== null && markedDays.includes(day);
            return (
              <View key={col} style={{width: cellW, height: rowH, alignItems: 'center', justifyContent: 'center'}}>
                {day !== null && (
                  <View style={{
                    width: s(26), height: s(26), borderRadius: s(13),
                    backgroundColor: marked ? 'rgba(205,10,10,0.38)' : 'transparent',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Text style={{
                      fontFamily: marked ? 'PixelifySans_700Bold' : 'PixelifySans_400Regular',
                      fontSize: s(12), color: marked ? C.red : C.black,
                    }}>{day}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'TransactionCalendar'>;

export function TransactionCalendarScreen({navigation}: Props) {
  const [monthIdx, setMonthIdx] = useState(4);
  const canGoPrev = monthIdx > 0;
  const canGoNext = monthIdx < MONTH_NAMES.length - 1;
  const {transactions} = MONTH_DATA[monthIdx];

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

          <View style={[st.abs, {left: 0, top: s(131), width: SW, height: s(796), backgroundColor: C.card, borderTopLeftRadius: s(24), borderTopRightRadius: s(24)}]} />
          <View style={[st.abs, {left: s(19), top: s(161), width: s(391), height: s(724), backgroundColor: C.white, borderRadius: s(30)}]} />

          <Text style={[st.abs, st.secTitle, {left: s(53), top: s(185)}]}>İşlem Takvimi</Text>
          <View style={[st.abs, {left: s(46), top: s(227), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <TouchableOpacity onPress={() => canGoPrev && setMonthIdx(m => m - 1)}
            style={[st.abs, {left: s(44), top: s(244), width: s(52), height: s(52), justifyContent: 'center', alignItems: 'center'}]}>
            <Image source={require('../assets/images/cal_arrow.png')}
              style={{width: s(36), height: s(33), transform: [{rotate: '180deg'}], opacity: canGoPrev ? 1 : 0.3}}
              resizeMode="contain" />
          </TouchableOpacity>

          <Text style={[st.abs, st.monthText, {left: s(130), top: s(259), width: s(165), textAlign: 'center'}]}>
            {MONTH_NAMES[monthIdx]} 2026
          </Text>

          <TouchableOpacity onPress={() => canGoNext && setMonthIdx(m => m + 1)}
            style={[st.abs, {left: s(334), top: s(244), width: s(52), height: s(52), justifyContent: 'center', alignItems: 'center'}]}>
            <Image source={require('../assets/images/cal_arrow.png')}
              style={{width: s(35), height: s(33), opacity: canGoNext ? 1 : 0.3}}
              resizeMode="contain" />
          </TouchableOpacity>

          <CalendarGrid monthIdx={monthIdx} />

          <View style={[st.abs, {left: s(44), top: s(560), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

          <Text style={[st.abs, st.colHeader, {left: s(47),  top: s(539), color: C.red}]}>Tarih</Text>
          <Text style={[st.abs, st.colHeader, {left: s(193), top: s(539), color: C.oyunColor}]}>Oyun</Text>
          <Text style={[st.abs, st.colHeader, {left: s(309), top: s(540), color: C.katColor}]}>Kategori</Text>

          {transactions.map((tx, i) => {
            const rowY = 574 + i * 32;
            return (
              <View key={i} style={[st.abs, {left: s(44), top: s(rowY), flexDirection: 'row'}]}>
                <Text style={[st.txDate, {width: s(113)}]}>{tx.tarih}</Text>
                <Text style={[st.txOyun, {width: s(111)}]}>{tx.oyun}</Text>
                <Text style={[st.txKat,  {width: s(111)}]}>{tx.kat}</Text>
              </View>
            );
          })}

          <Text style={[st.abs, st.txDate, {left: s(47), top: s(574 + transactions.length * 32)}]}>...</Text>

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
  monthText: {fontFamily: 'PixelifySans_400Regular', fontSize: s(20), color: C.black},
  colHeader: {fontFamily: 'PixelifySans_700Bold', fontSize: s(15), lineHeight: s(21)},
  txDate: {fontFamily: 'PixelifySans_400Regular', fontSize: s(15), fontWeight: '500', color: C.red, lineHeight: s(21)},
  txOyun: {fontFamily: 'PixelifySans_700Bold', fontSize: s(13), color: C.oyunColor, lineHeight: s(18), textAlign: 'center'},
  txKat:  {fontFamily: 'PixelifySans_700Bold', fontSize: s(13), color: C.katColor,  lineHeight: s(18), textAlign: 'center'},
});
