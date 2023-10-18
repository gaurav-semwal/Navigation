import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../component/Error';
import {Booked} from '../asset';
import {Heart} from '../asset';
import {Profile} from '../asset';
import {Maison} from '../asset';

const Tab = createBottomTabNavigator();

const HomeTabIcon = () => <Maison width={28} height={28} />;
const BookedTabIcon = () => <Heart width={28} height={28} />;
const SavedTabIcon = () => <Booked width={28} height={28} />;
const ProfileTabIcon = () => <Profile width={28} height={28} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: SavedTabIcon,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: BookedTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
