/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Home from '../component/Home';
import Detail from '../component/Detail';
import Stack1 from './Stack1';
import Api from './API';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>APPINVENTIV</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('APPINVENTIV')}>
        <Text style={styles.drawerItemText}>APPINVENTIV</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('HOME')}>
        <Text style={styles.drawerItemText}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('SIGN UP')}>
        <Text style={styles.drawerItemText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('API')}>
        <Text style={styles.drawerItemText}>API</Text>
      </TouchableOpacity>
    </View>
  );
};

function Drawer1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={styles.drawer}>
        <Drawer.Screen name="APPINVENTIV" component={Stack1} />
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="SIGN UP" component={Detail} />
        <Drawer.Screen name="API" component={Api} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#F4F4F4',
    width: 250,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  drawerHeader: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  drawerHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default Drawer1;
