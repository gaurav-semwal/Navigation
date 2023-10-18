/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../component/ProfileScreen';
import {Booked} from '../asset';
import {Heart} from '../asset';
import {Profile} from '../asset';
import {Maison} from '../asset';

const Tab = createBottomTabNavigator();

const Tab2Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Maison width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Booked width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Heart width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Profile width={28} height={28} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tab2Navigator;