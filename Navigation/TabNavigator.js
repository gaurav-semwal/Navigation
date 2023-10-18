/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Notification from '../component/Notification';
import {Booked} from '../asset';
import {Heart} from '../asset';
import {Profile} from '../asset';
import {Maison} from '../asset';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Maison width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Heart width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Booked width={28} height={28} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Profile width={28} height={28} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
