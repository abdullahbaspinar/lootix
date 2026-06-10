import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {SIGN_IN_ASSETS, SignInIconType} from '../constants/signInAssets';
import {colors} from '../constants/colors';
import {EyeIcon} from './Icons';

type InputFieldProps = TextInputProps & {
  label: string;
  icon?: SignInIconType;
  isPassword?: boolean;
};

export function InputField({
  label,
  icon,
  isPassword = false,
  ...props
}: InputFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {icon && (
          <View style={styles.leftIcon}>
            <Image
              source={SIGN_IN_ASSETS[icon]}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </View>
        )}
        <TextInput
          style={[styles.input, icon ? styles.inputWithIcon : undefined]}
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
    minHeight: 52,
  },
  leftIcon: {
    paddingLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 22,
    height: 22,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.text,
  },
  inputWithIcon: {
    paddingLeft: 10,
  },
  eyeButton: {
    paddingRight: 14,
    paddingLeft: 8,
  },
});
