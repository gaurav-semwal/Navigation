/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Tab1 from './Tab1';
import {NavigationContainer} from '@react-navigation/native';

function Stack1() {
  return (
    <NavigationContainer>
      <Tab1 />
    </NavigationContainer>
  );
}

export default Stack1;
