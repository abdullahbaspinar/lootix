import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants/colors';
import {EyeIcon} from './Icons';

type InputFieldProps = TextInputProps & {
  label: string;
  leftIcon?: React.ReactNode;
  isPassword?: boolean;
};

export function InputField({
  label,
  leftIcon,
  isPassword = false,
  ...props
}: InputFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[styles.input, leftIcon ? styles.inputWithIcon : undefined]}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={isPassword && !visible}
          autoCapitalize="none"
          {...props}
        />
        {isPassword && (
          <Pressable
            style={styles.eyeButton}
            onPress={() => setVisible(v => !v)}
            hitSlop={8}>
            <EyeIcon visible={visible} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.background,
  },
  leftIcon: {
    paddingLeft: 14,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.text,
  },
  inputWithIcon: {
    paddingLeft: 8,
  },
  eyeButton: {
    paddingRight: 14,
    paddingLeft: 8,
  },
});
