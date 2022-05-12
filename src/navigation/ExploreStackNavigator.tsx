import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {ExploreStackParamList} from '../types/navigation';
import ExploreScreen from '../feature/explore/screens/ExploreScreen';

const ExploreStack = createStackNavigator<ExploreStackParamList>();
const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
