/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Tab1 from './Tab1';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileEdit from '../screens/ProfileEdit';
import ProfileScreen from '../screens/ProfileScreen';
import Error from '../screens/Error';

const Stack = createNativeStackNavigator();

const Stack1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Tab"
          component={Tab1}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Error"
          component={Error}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack1;
