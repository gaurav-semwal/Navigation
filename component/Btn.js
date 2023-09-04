/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Btn = ({Press, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Press}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008000',
    borderRadius: 10,
    alignItems: 'center',
    width: 350,
    paddingVertical: 10,
    marginVertical: 20,
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Btn;
