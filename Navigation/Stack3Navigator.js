/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Tab3Navigator from './Tab3Navigator';
import {NavigationContainer} from '@react-navigation/native';

const Stack3Navigator = () => {
  return (
    <NavigationContainer>
      <Tab3Navigator />
    </NavigationContainer>
  );
};

export default Stack3Navigator;
