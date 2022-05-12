import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

//Navigators
import ExploreStackNavigator from './ExploreStackNavigator';
import PortfolioStackNavigator from './PortfolioStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';

//Images
import ExploreActive from '../assets/images/BottomTabBar/ExploreActive.png';
import ExploreInactive from '../assets/images/BottomTabBar/ExploreInactive.png';
import PortfolioActive from '../assets/images/BottomTabBar/PortfolioActive.png';
import PortfolioInactive from '../assets/images/BottomTabBar/PortfolioInactive.png';
import AccountActive from '../assets/images/BottomTabBar/AccountActive.png';
import AccountInactive from '../assets/images/BottomTabBar/AccountInactive.png';
import {ExploreTabParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<ExploreTabParamList>();
const ExploreTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        initialRouteName: 'Explore',
        headerShown: false,
        tabBarActiveBackgroundColor: '#161616',
        tabBarInactiveBackgroundColor: '#161616',
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: '#161616',
          borderTopColor: '#242424',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'ExploreStack') {
            iconName = focused ? ExploreActive : ExploreInactive;
          } else if (route.name === 'PortfolioStack') {
            iconName = focused ? PortfolioActive : PortfolioInactive;
          } else if (route.name === 'AccountStack') {
            iconName = focused ? AccountActive : AccountInactive;
          }
          return <Image source={iconName} style={{width: 30, height: 30}} />;
        },
      })}>
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackNavigator}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityExplore(route),
          },
        })}
      />
      <Tab.Screen
        name="PortfolioStack"
        component={PortfolioStackNavigator}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityPortfolio(route),
          },
        })}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityAccount(route),
          },
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibilityExplore = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (!routeName || routeName?.includes('Explore')) {
    return 'flex';
  }
  return 'none';
};

const getTabBarVisibilityPortfolio = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (!routeName || routeName?.includes('Portfolio')) {
    return 'flex';
  }
  return 'none';
};

const getTabBarVisibilityAccount = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (!routeName || routeName?.includes('Account')) {
    return 'flex';
  }
  return 'none';
};

export default ExploreTabNavigator;
