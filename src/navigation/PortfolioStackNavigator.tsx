import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {PortfolioStackParamList} from '../types/navigation';
import PortfolioScreen from '../feature/portfolio/screens/PortfolioScreen';

const PortfolioStack = createStackNavigator<PortfolioStackParamList>();
const PortfolioStackNavigator = () => {
  return (
    <PortfolioStack.Navigator
      initialRouteName="Portfolio"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <PortfolioStack.Screen name="Portfolio" component={PortfolioScreen} />
    </PortfolioStack.Navigator>
  );
};

export default PortfolioStackNavigator;
