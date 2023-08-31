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
const Drawer = createDrawerNavigator();

function Drawer1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Screen 1" component={Home} />
        <Drawer.Screen name="Screen 2" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Drawer1;
