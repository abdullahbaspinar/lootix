import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../constants/colors';
import {ContentSheet} from './ContentSheet';
import {Logo} from './Logo';

type LogoPageLayoutProps = {
  children: React.ReactNode;
  profileInitials?: string;
  showProfile?: boolean;
  sheetStyle?: ViewStyle;
};

export function LogoPageLayout({
  children,
  profileInitials = 'AB',
  showProfile = true,
  sheetStyle,
}: LogoPageLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <View style={[styles.header, {paddingTop: insets.top + 8}]}>
        <View style={styles.headerRow}>
          <View style={styles.side} />
          <Logo size="small" />
          {showProfile ? (
            <View style={styles.profileCircle}>
              <Text style={styles.profileText}>{profileInitials}</Text>
            </View>
          ) : (
            <View style={styles.side} />
          )}
        </View>
      </View>

      <ContentSheet style={sheetStyle}>{children}</ContentSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.headerGray,
  },
  header: {
    backgroundColor: colors.headerGray,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  side: {
    width: 40,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '700',
  },
});
