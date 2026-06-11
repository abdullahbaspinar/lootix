import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  View, Text, StyleSheet, Dimensions,
  TouchableOpacity, Image, ScrollView, Animated,
} from 'react-native';
import Svg, {Path, Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../abdullah/navigation/types';
import {handleTabPress} from '../../abdullah/navigation/tabNavigation';
import {BottomTabBar} from '../components/BottomTabBar';

const DW = 430;
const {width: SW} = Dimensions.get('window');
const s = (v: number) => v * (SW / DW);

const C = {
  bg: '#B3B3B3', card: '#EBEBEB', white: '#FFFDFD', black: '#000000',
  red: '#B90000', gray595: '#595959', gray585: '#585858', gray605: '#605C5C',
  gray656: '#656464', gray9B: '#9B9B9B',
};

type RangeKey = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface PeriodData {
  periodLabel: string;
  spendLabel: string;
  totalAmount: string;
  labels: string[];
  data: number[];
}

const DAILY_PERIODS: PeriodData[] = [
  {periodLabel: '19 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '45.00 ₺',   labels: ['09','11','13','15','17','21'], data: [0,45,0,0,0,0]},
  {periodLabel: '20 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '120.00 ₺',  labels: ['09','11','13','15','17','21'], data: [0,60,0,0,60,0]},
  {periodLabel: '21 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '0.00 ₺',    labels: ['09','11','13','15','17','21'], data: [0,0,0,0,0,0]},
  {periodLabel: '22 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '87.50 ₺',   labels: ['09','11','13','15','17','21'], data: [0,0,0,55,0,32.5]},
  {periodLabel: '23 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '230.00 ₺',  labels: ['09','11','13','15','17','21'], data: [0,0,30,120,80,0]},
  {periodLabel: '24 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '190.00 ₺',  labels: ['09','11','13','15','17','21'], data: [0,90,0,50,50,0]},
  {periodLabel: '25 May', spendLabel: 'Bugün Toplam Harcama', totalAmount: '75.00 ₺',   labels: ['09','11','13','15','17','21'], data: [0,0,0,75,0,0]},
];

const WEEKLY_PERIODS: PeriodData[] = [
  {periodLabel: '1. Hafta', spendLabel: 'Bu Hafta Toplam Harcama', totalAmount: '450.00 ₺', labels: ['Pzt','Sal','Çar','Per','Cum','Cmt'], data: [70,50,60,80,100,90]},
  {periodLabel: '2. Hafta', spendLabel: 'Bu Hafta Toplam Harcama', totalAmount: '680.00 ₺', labels: ['Pzt','Sal','Çar','Per','Cum','Cmt'], data: [100,0,80,200,210,90]},
  {periodLabel: '3. Hafta', spendLabel: 'Bu Hafta Toplam Harcama', totalAmount: '320.00 ₺', labels: ['Pzt','Sal','Çar','Per','Cum','Cmt'], data: [50,70,60,50,60,30]},
  {periodLabel: '4. Hafta', spendLabel: 'Bu Hafta Toplam Harcama', totalAmount: '755.00 ₺', labels: ['Pzt','Sal','Çar','Per','Cum','Cmt'], data: [120,0,45,200,310,80]},
];

const MONTHLY_PERIODS: PeriodData[] = [
  {periodLabel: 'Ocak',    spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '890,00 ₺',    labels: ['1','7','14','21','28','31'], data: [80,120,150,200,180,160]},
  {periodLabel: 'Şubat',   spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '650,00 ₺',    labels: ['1','5','10','15','20','28'], data: [50,100,80,150,180,90]},
  {periodLabel: 'Mart',    spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.120,00 ₺',  labels: ['1','7','14','21','28','31'], data: [100,150,200,300,250,120]},
  {periodLabel: 'Nisan',   spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '780,00 ₺',    labels: ['1','7','14','21','28','30'], data: [60,90,180,160,200,90]},
  {periodLabel: 'Mayıs',   spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.275,50 ₺',  labels: ['1','8','15','22','29','31'], data: [150,80,340,450,180,75]},
  {periodLabel: 'Haziran', spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '940,00 ₺',    labels: ['1','7','14','21','28','30'], data: [100,120,180,220,200,120]},
  {periodLabel: 'Temmuz',  spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.450,00 ₺',  labels: ['1','7','14','21','28','31'], data: [120,200,250,350,380,150]},
  {periodLabel: 'Ağustos', spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.100,00 ₺',  labels: ['1','7','14','21','28','31'], data: [150,180,220,280,200,70]},
  {periodLabel: 'Eylül',   spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '830,00 ₺',    labels: ['1','7','14','21','28','30'], data: [80,100,150,200,180,120]},
  {periodLabel: 'Ekim',    spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.200,00 ₺',  labels: ['1','7','14','21','28','31'], data: [100,130,200,350,300,120]},
  {periodLabel: 'Kasım',   spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '975,00 ₺',    labels: ['1','7','14','21','28','30'], data: [100,150,200,250,200,75]},
  {periodLabel: 'Aralık',  spendLabel: 'Bu Ay Toplam Harcama', totalAmount: '1.850,00 ₺',  labels: ['1','7','14','21','28','31'], data: [200,250,350,450,400,200]},
];

const YEARLY_PERIODS: PeriodData[] = [
  {periodLabel: '2020', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '8.450,00 ₺',  labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [1200,1400,1500,1800,1300,1250]},
  {periodLabel: '2021', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '9.200,00 ₺',  labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [1300,1500,1600,2000,1400,1400]},
  {periodLabel: '2022', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '11.300,00 ₺', labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [1600,1800,2000,2500,1900,1500]},
  {periodLabel: '2023', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '13.750,00 ₺', labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [2000,2200,2400,3000,2400,1750]},
  {periodLabel: '2024', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '15.200,00 ₺', labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [2200,2500,2700,3500,2600,1700]},
  {periodLabel: '2025', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '18.400,00 ₺', labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [2600,3000,3200,4200,3200,2200]},
  {periodLabel: '2026', spendLabel: 'Bu Yıl Toplam Harcama', totalAmount: '4.625,00 ₺',  labels: ['Oca','Mar','May','Tem','Eyl','Ara'], data: [800,1200,1275,600,500,250]},
];

const YEARLY_GLOBAL_MAX = Math.max(...YEARLY_PERIODS.flatMap(p => p.data));
const RANGE_KEYS: RangeKey[] = ['daily', 'weekly', 'monthly', 'yearly'];
const TABS = ['Günlük', 'Haftalık', 'Aylık', 'Yıllık'];
const TAB_X = [0, 95, 193, 288];
const SECTIONS = [
  {bgX: 21, bgY: 566, bgW: 390, bgH: 70, txtX: 42, txtY: 576.74, txt: 'Oyunlara & Kategorilere\nGöre Dağılımlar', imgX: 337.6, imgY: 572, color: C.gray585},
  {bgX: 22, bgY: 659, bgW: 390, bgH: 70, txtX: 42, txtY: 683,    txt: 'Analiz & Akıllı Öneriler',                  imgX: 341,   imgY: 661, color: C.gray605},
  {bgX: 20, bgY: 757, bgW: 390, bgH: 70, txtX: 40, txtY: 781,    txt: 'İşlem Takvimi',                             imgX: 338,   imgY: 765, color: C.gray585},
];
const SECTION_ROUTES = ['Distributions', 'SmartSuggestions', 'TransactionCalendar'] as const;
const CX0 = 7, CX1 = 345, CY0 = 15, CY1 = 114;
const CW = CX1 - CX0, CH = CY1 - CY0;

function LineChart({data, globalMax}: {data: number[]; globalMax?: number}) {
  if (!data || data.length < 2) return null;
  const max = globalMax !== undefined ? globalMax : Math.max(...data, 1);
  const n = data.length;
  const pts = data.map((v, i) => ({
    x: CX0 + (i / (n - 1)) * CW,
    y: CY1 - (v / max) * CH * 0.85,
  }));
  const linePath = pts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    const prev = pts[i - 1];
    const cx = ((prev.x + pt.x) / 2).toFixed(1);
    return `${acc} C ${cx} ${prev.y.toFixed(1)}, ${cx} ${pt.y.toFixed(1)}, ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  }, '');
  const areaPath = `${linePath} L ${pts[n - 1].x.toFixed(1)} ${CY1} L ${CX0} ${CY1} Z`;
  return (
    <Svg width={s(358)} height={s(120)} viewBox="0 0 358 120"
      style={{position: 'absolute', left: s(31), top: s(380)}}>
      <Defs>
        <LinearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={C.red} stopOpacity="0.18" />
          <Stop offset="1" stopColor={C.red} stopOpacity="0.01" />
        </LinearGradient>
      </Defs>
      <Path d={areaPath} fill="url(#areaGrad)" />
      <Path d={linePath} stroke={C.red} strokeWidth={1.5} fill="none"
        strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((pt, i) => (
        <Circle key={i} cx={pt.x.toFixed(1)} cy={pt.y.toFixed(1)}
          r={3.5} fill="white" stroke={C.red} strokeWidth={2} />
      ))}
    </Svg>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'Analysis'>;

export function AnalysisScreen({navigation}: Props) {
  const [selectedRange, setSelectedRange] = useState<RangeKey>('monthly');
  const [dailyIdx,   setDailyIdx]   = useState(6);
  const [weeklyIdx,  setWeeklyIdx]  = useState(3);
  const [monthlyIdx, setMonthlyIdx] = useState(4);
  const [yearlyIdx,  setYearlyIdx]  = useState(6);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentPeriod = useMemo<PeriodData>(() => {
    switch (selectedRange) {
      case 'daily':   return DAILY_PERIODS[dailyIdx];
      case 'weekly':  return WEEKLY_PERIODS[weeklyIdx];
      case 'monthly': return MONTHLY_PERIODS[monthlyIdx];
      case 'yearly':  return YEARLY_PERIODS[yearlyIdx];
    }
  }, [selectedRange, dailyIdx, weeklyIdx, monthlyIdx, yearlyIdx]);

  const atStart = useMemo(() => {
    if (selectedRange === 'daily')   return dailyIdx   === 0;
    if (selectedRange === 'weekly')  return weeklyIdx  === 0;
    if (selectedRange === 'monthly') return monthlyIdx === 0;
    return yearlyIdx === 0;
  }, [selectedRange, dailyIdx, weeklyIdx, monthlyIdx, yearlyIdx]);

  const atEnd = useMemo(() => {
    if (selectedRange === 'daily')   return dailyIdx   === DAILY_PERIODS.length - 1;
    if (selectedRange === 'weekly')  return weeklyIdx  === WEEKLY_PERIODS.length - 1;
    if (selectedRange === 'monthly') return monthlyIdx === MONTHLY_PERIODS.length - 1;
    return yearlyIdx === YEARLY_PERIODS.length - 1;
  }, [selectedRange, dailyIdx, weeklyIdx, monthlyIdx, yearlyIdx]);

  const animateChange = useCallback((update: () => void) => {
    Animated.timing(fadeAnim, {toValue: 0, duration: 140, useNativeDriver: true}).start(() => {
      update();
      Animated.timing(fadeAnim, {toValue: 1, duration: 260, useNativeDriver: true}).start();
    });
  }, [fadeAnim]);

  const handleRangeChange = useCallback((key: RangeKey) => {
    if (key === selectedRange) return;
    animateChange(() => setSelectedRange(key));
  }, [selectedRange, animateChange]);

  const handlePrev = useCallback(() => {
    if (atStart) return;
    animateChange(() => {
      if (selectedRange === 'daily')   setDailyIdx(p   => Math.max(0, p - 1));
      if (selectedRange === 'weekly')  setWeeklyIdx(p  => Math.max(0, p - 1));
      if (selectedRange === 'monthly') setMonthlyIdx(p => Math.max(0, p - 1));
      if (selectedRange === 'yearly')  setYearlyIdx(p  => Math.max(0, p - 1));
    });
  }, [atStart, selectedRange, animateChange]);

  const handleNext = useCallback(() => {
    if (atEnd) return;
    animateChange(() => {
      if (selectedRange === 'daily')   setDailyIdx(p   => Math.min(DAILY_PERIODS.length - 1,   p + 1));
      if (selectedRange === 'weekly')  setWeeklyIdx(p  => Math.min(WEEKLY_PERIODS.length - 1,  p + 1));
      if (selectedRange === 'monthly') setMonthlyIdx(p => Math.min(MONTHLY_PERIODS.length - 1, p + 1));
      if (selectedRange === 'yearly')  setYearlyIdx(p  => Math.min(YEARLY_PERIODS.length - 1,  p + 1));
    });
  }, [atEnd, selectedRange, animateChange]);

  return (
    <View style={{flex: 1, backgroundColor: C.bg}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: s(87)}}>
        <View style={{width: SW, height: s(932), backgroundColor: C.bg}}>

          <Image source={require('../assets/images/app_logo.png')}
            style={[st.abs, {left: s(165), top: s(66), width: s(100), height: s(57)}]}
            resizeMode="contain" />

          <View style={[st.abs, {
            left: s(1), top: s(140), width: SW, height: s(792),
            backgroundColor: C.card, borderTopLeftRadius: s(24), borderTopRightRadius: s(24),
          }]} />

          <Text style={[st.abs, st.title, {left: s(62), top: s(146), width: s(303)}]}>
            Analizim
          </Text>

          <View style={[st.abs, {
            left: s(21), top: s(195), width: s(391), height: s(346),
            backgroundColor: C.white, borderTopLeftRadius: s(24), borderTopRightRadius: s(24),
          }]} />

          {TABS.map((tab, i) => {
            const key = RANGE_KEYS[i];
            const isActive = key === selectedRange;
            return (
              <TouchableOpacity key={tab} onPress={() => handleRangeChange(key)}
                style={[st.abs, {
                  left: s(32 + TAB_X[i]), top: s(208),
                  width: s(78.37), height: s(31.98),
                  backgroundColor: isActive ? C.red : C.white,
                  borderRadius: s(8), justifyContent: 'center', alignItems: 'center',
                }]}>
                <Text style={[st.tabTxt, {color: isActive ? '#FFFFFF' : C.black}]}>{tab}</Text>
              </TouchableOpacity>
            );
          })}

          <Animated.View pointerEvents="box-none"
            style={[st.abs, {left: 0, top: 0, width: SW, height: s(932), opacity: fadeAnim}]}>
            <TouchableOpacity onPress={handlePrev} disabled={atStart}
              style={[st.abs, {left: s(78), top: s(257), width: s(48), height: s(48), justifyContent: 'center', alignItems: 'center'}]}>
              <Svg width={s(34)} height={s(34)} viewBox="0 0 24 24">
                <Path d="M15 4 L7 12 L15 20" stroke={atStart ? C.gray9B : C.gray595}
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </Svg>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNext} disabled={atEnd}
              style={[st.abs, {left: s(288), top: s(257), width: s(48), height: s(48), justifyContent: 'center', alignItems: 'center'}]}>
              <Svg width={s(34)} height={s(34)} viewBox="0 0 24 24">
                <Path d="M9 4 L17 12 L9 20" stroke={atEnd ? C.gray9B : C.gray595}
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </Svg>
            </TouchableOpacity>

            <Text style={[st.abs, st.mayis, {left: s(117), top: s(266), width: s(189)}]}>
              {currentPeriod.periodLabel}
            </Text>
            <Text style={[st.abs, st.spendLabel, {left: s(48), top: s(320)}]}>
              {currentPeriod.spendLabel}
            </Text>
            <Text style={[st.abs, st.spendAmt, {left: s(45), top: s(338)}]}>
              {currentPeriod.totalAmount}
            </Text>

            <LineChart data={currentPeriod.data}
              globalMax={selectedRange === 'yearly' ? YEARLY_GLOBAL_MAX : undefined} />

            <View style={[st.abs, {left: s(38), top: s(395), width: 1, height: s(99), backgroundColor: C.gray9B}]} />
            <View style={[st.abs, {left: s(38), top: s(494), width: s(338), height: 1, backgroundColor: C.gray9B}]} />

            {currentPeriod.labels.map((text, i) => {
              const xPos = 38 + (i / (currentPeriod.labels.length - 1)) * 330;
              return (
                <Text key={`${selectedRange}-${i}`}
                  style={[st.abs, st.dayLabel, {left: s(xPos), top: s(500)}]}>
                  {text}
                </Text>
              );
            })}
          </Animated.View>

          {SECTIONS.map((sec, i) => (
            <TouchableOpacity key={i} activeOpacity={0.8}
              onPress={() => navigation.navigate(SECTION_ROUTES[i])}
              style={[st.abs, {left: s(sec.bgX), top: s(sec.bgY), width: s(sec.bgW), height: s(sec.bgH)}]}>
              <View style={{flex: 1, backgroundColor: C.white, borderRadius: s(15)}} />
            </TouchableOpacity>
          ))}
          {SECTIONS.map((sec, i) => (
            <View key={`txt-${i}`} pointerEvents="none">
              <Text style={[st.abs, st.secTxt, {left: s(sec.txtX), top: s(sec.txtY), color: sec.color}]}>
                {sec.txt}
              </Text>
              <Image source={require('../assets/images/section_img.png')}
                style={[st.abs, {left: s(sec.imgX), top: s(sec.imgY), width: s(63.4), height: s(58.74), borderRadius: s(8)}]}
                resizeMode="cover" />
            </View>
          ))}

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
  title:      {fontFamily: 'PixelifySans_600SemiBold', fontSize: s(35), color: C.black, textAlign: 'center'},
  tabTxt:     {fontFamily: 'PixelifySans_400Regular',  fontSize: s(18), textAlign: 'center'},
  mayis:      {fontFamily: 'PixelifySans_700Bold',     fontSize: s(30), color: C.gray595, textAlign: 'center'},
  spendLabel: {fontFamily: 'PixelifySans_400Regular',  fontSize: s(15), color: C.gray656},
  spendAmt:   {fontSize: s(29), color: C.red, fontWeight: '700'},
  dayLabel:   {fontFamily: 'PixelifySans_700Bold',     fontSize: s(15), color: C.black, lineHeight: s(21)},
  secTxt:     {fontFamily: 'PixelifySans_700Bold',     fontSize: s(20), lineHeight: s(25)},
});
