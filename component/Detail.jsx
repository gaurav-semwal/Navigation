/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>APPINVENTIV</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Detail;
