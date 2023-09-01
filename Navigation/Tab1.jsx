/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../component/Home';
import Detail from '../component/Detail';

const Tab = createBottomTabNavigator();

const Tab1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default Tab1;
