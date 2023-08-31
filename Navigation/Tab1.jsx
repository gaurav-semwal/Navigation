/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../component/Home';
import Detail from '../component/Detail';

const Tab = createBottomTabNavigator();

const Tab1 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Home} />
        <Tab.Screen name="Tab2" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tab1;
