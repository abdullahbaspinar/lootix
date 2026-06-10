export const SIGN_IN_ASSETS = {
  mail: require('../assets/sign-in/mail.png'),
  password: require('../assets/sign-in/password.png'),
  person: require('../assets/sign-in/personel.png'),
} as const;

export type SignInIconType = keyof typeof SIGN_IN_ASSETS;
