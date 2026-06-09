import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
};

export function OtpInput({value, onChange, length = 4}: OtpInputProps) {
  const inputs = useRef<(TextInput | null)[]>([]);

  const digits = value.padEnd(length, ' ').split('').slice(0, length);

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const newValue = digits.map((d, i) => (i === index ? digit : d.trim())).join('');
    onChange(newValue.replace(/\s/g, ''));

    if (digit && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !digits[index]?.trim() && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({length}).map((_, index) => (
        <TextInput
          key={index}
          ref={ref => {
            inputs.current[index] = ref;
          }}
          style={styles.box}
          value={digits[index]?.trim() || ''}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key, index)}
          keyboardType="number-pad"
          maxLength={1}
          selectTextOnFocus
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  box: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.text,
    backgroundColor: colors.background,
  },
});
