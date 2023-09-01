/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../component/Home';
import Detail from '../component/Detail';
import Stack1 from './Stack1';
const Drawer = createDrawerNavigator();

function Drawer1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main Screen" component={Stack1} />
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="DETAIL" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawer1;
