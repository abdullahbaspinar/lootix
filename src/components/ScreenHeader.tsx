import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {BackIcon} from './Icons';
import {Logo} from './Logo';

type ScreenHeaderProps = {
  onBack?: () => void;
  showLogo?: boolean;
};

export function ScreenHeader({onBack, showLogo = true}: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      {onBack ? (
        <Pressable style={styles.backButton} onPress={onBack} hitSlop={12}>
          <BackIcon />
        </Pressable>
      ) : (
        <View style={styles.backPlaceholder} />
      )}
      {showLogo && <Logo size="small" />}
      <View style={styles.backPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  backPlaceholder: {
    width: 40,
  },
});
