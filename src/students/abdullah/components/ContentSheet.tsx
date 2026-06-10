import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors, layout} from '../constants/colors';

type ContentSheetProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function ContentSheet({children, style}: ContentSheetProps) {
  return <View style={[styles.sheet, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: layout.sheetRadius,
    borderTopRightRadius: layout.sheetRadius,
    overflow: 'hidden',
  },
});
