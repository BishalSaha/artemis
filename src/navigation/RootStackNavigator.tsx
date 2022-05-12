import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ExploreTabNavigator from './ExploreTabNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ExploreTabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
