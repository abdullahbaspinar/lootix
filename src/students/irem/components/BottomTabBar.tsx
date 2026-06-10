import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {NAVBAR_ICONS, TabName} from '../../abdullah/constants/navbar';
import {colors} from '../constants/colors';

type BottomTabBarProps = {
  activeTab?: TabName;
  onTabPress?: (tab: TabName) => void;
};

const TABS: TabName[] = ['list', 'chart1', 'home', 'chart2', 'settings'];

const ICON_SIZE = 26;
const HOME_ICON_SIZE = 30;

export function BottomTabBar({
  activeTab = 'home',
  onTabPress,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = tab === activeTab;
        const isHome = tab === 'home';
        const size = isHome && isActive ? HOME_ICON_SIZE : ICON_SIZE;

        return (
          <Pressable
            key={tab}
            style={styles.tab}
            onPress={() => onTabPress?.(tab)}>
            <Image
              source={NAVBAR_ICONS[tab]}
              style={[
                {width: size, height: size},
                !isActive && styles.iconInactive,
              ]}
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
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  iconInactive: {
    opacity: 0.4,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
});
