import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {PasswordSuccessScreen} from '../screens/auth/PasswordSuccessScreen';
import {ResetPasswordScreen} from '../screens/auth/ResetPasswordScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen';
import {VerificationCodeScreen} from '../screens/auth/VerificationCodeScreen';
import {WelcomeScreen} from '../screens/auth/WelcomeScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {SplashScreen} from '../screens/SplashScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
        />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen
          name="PasswordSuccess"
          component={PasswordSuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
