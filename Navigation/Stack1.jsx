/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../component/Home';
import Detail from '../component/Detail';
const Stack = createNativeStackNavigator();

function Stack1() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack1;
