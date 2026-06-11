import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnalysisScreen} from '../../feyza/screens/AnalysisScreen';
import {DistributionsScreen} from '../../feyza/screens/DistributionsScreen';
import {SmartSuggestionsScreen} from '../../feyza/screens/SmartSuggestionsScreen';
import {TransactionCalendarScreen} from '../../feyza/screens/TransactionCalendarScreen';
import {AddAmountScreen} from '../../irem/screens/AddAmountScreen';
import {AddExpenseGameScreen} from '../../irem/screens/AddExpenseGameScreen';
import {AddGameScreen} from '../../irem/screens/AddGameScreen';
import {CategorySelectionScreen} from '../../irem/screens/CategorySelectionScreen';
import {HomeScreen} from '../../irem/screens/HomeScreen';
import {LeaderboardScreen} from '../../mustafa/screens/LeaderboardScreen';
import {ProgressScreen} from '../../mustafa/screens/ProgressScreen';
import {AboutScreen} from '../../ortak/screens/AboutScreen';
import {AddFriendScreen} from '../../ortak/screens/AddFriendScreen';
import {EditProfileScreen} from '../../ortak/screens/EditProfileScreen';
import {HelpSupportScreen} from '../../ortak/screens/HelpSupportScreen';
import {ProfileScreen} from '../../ortak/screens/ProfileScreen';
import {SettingsScreen} from '../../ortak/screens/SettingsScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {PasswordSuccessScreen} from '../screens/auth/PasswordSuccessScreen';
import {ResetPasswordScreen} from '../screens/auth/ResetPasswordScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen';
import {VerificationCodeScreen} from '../screens/auth/VerificationCodeScreen';
import {WelcomeScreen} from '../screens/auth/WelcomeScreen';
import {GoalsScreen} from '../screens/goals/GoalsScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {FinancialInputScreen} from '../screens/setup/FinancialInputScreen';
import {GameSelectionScreen} from '../screens/setup/GameSelectionScreen';
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
        <Stack.Screen name="GameSelection" component={GameSelectionScreen} />
        <Stack.Screen name="FinancialInput" component={FinancialInputScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AddExpenseGame"
          component={AddExpenseGameScreen}
        />
        <Stack.Screen
          name="CategorySelection"
          component={CategorySelectionScreen}
        />
        <Stack.Screen name="AddAmount" component={AddAmountScreen} />
        <Stack.Screen name="AddGame" component={AddGameScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="Distributions" component={DistributionsScreen} />
        <Stack.Screen
          name="SmartSuggestions"
          component={SmartSuggestionsScreen}
        />
        <Stack.Screen
          name="TransactionCalendar"
          component={TransactionCalendarScreen}
        />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="AddFriend" component={AddFriendScreen} />
        <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
