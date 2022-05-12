import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {AccountStackParamList} from '../types/navigation';
import AccountScreen from '../feature/account/screens/AccountScreen';

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountStackNavigator;
