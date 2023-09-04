import React from 'react';
import {
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
} from 'react-native';
import Api from '../Navigation/API';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../asset/app.jpeg')} style={styles.logo} />
        <Text style={styles.title}>Welcome to AppInventiv App</Text>

        <Button
          title="Go to Sign Up Page"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
});

export default Home;
