import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Booked} from '../asset';
import {Heart} from '../asset';
import {Profile} from '../asset';
import {Maison} from '../asset';
// import ProfileEdit from '../component/ProfileEdit';
import ProfileScreen from '../screens/ProfileScreen';

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
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile Edit"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: BookedTabIcon,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: SavedTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
