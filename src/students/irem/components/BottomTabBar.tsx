import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NAVBAR_ICONS, TabName} from '../../abdullah/constants/navbar';
import {colors} from '../constants/colors';

type BottomTabBarProps = {
  activeTab?: TabName;
  onTabPress?: (tab: TabName) => void;
};

const TABS: TabName[] = ['list', 'chart1', 'home', 'chart2', 'settings'];

const ICON_SIZE = 28;
const HOME_ICON_SIZE = 30;

export function BottomTabBar({activeTab = 'home', onTabPress}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom > 0 ? insets.bottom : 15}]}>
      {TABS.map(tab => {
        const isActive = tab === activeTab;
        const isHome = tab === 'home';
        const size = isHome && isActive ? HOME_ICON_SIZE : ICON_SIZE;
        return (
          <Pressable key={tab} style={styles.tab} onPress={() => onTabPress?.(tab)}>
            <Image
              source={NAVBAR_ICONS[tab]}
              style={[{width: size, height: size}, !isActive && styles.iconInactive]}
              resizeMode="contain"
            />
            {isActive && <View style={styles.activeDot} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: colors.card,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    zIndex: 99,
  },
  tab: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  iconInactive: {
    opacity: 0.35,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
});
