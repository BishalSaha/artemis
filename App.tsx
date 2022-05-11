import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>artemis</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '900',
    fontSize: 20,
    color: '#000',
  },
});
