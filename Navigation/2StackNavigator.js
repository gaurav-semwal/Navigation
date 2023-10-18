/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Tab2Navigator from './2TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Stack2Navigator = () => {
  return (
    <NavigationContainer>
      <Tab2Navigator />
    </NavigationContainer>
  );
};

export default Stack2Navigator;
