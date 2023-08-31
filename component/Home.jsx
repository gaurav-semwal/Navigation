/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, StyleSheet, SafeAreaView, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          DETAIL SCREEN
        </Text>
        <Button
          title="Go to Details Screen"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
});

export default Home;
