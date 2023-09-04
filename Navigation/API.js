/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet} from 'react-native';
import Btn from '../component/Btn';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const getAPI = () => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then(res => setData(res.data))

      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>API</Text>
      <View style={styles.buttonContainer}>
        <Btn title={'GET APPINVENTORS DATA'} Press={getAPI} />
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemId}>Id: {item.id}</Text>
            <Text style={styles.itemTitle}>Title: {item.title}</Text>
            <Text style={styles.itemBody}>Body: {item.body}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemId: {
    fontSize: 20,
    color: 'black',
  },
  itemTitle: {
    fontSize: 20,
    color: 'black',
  },
  itemBody: {
    fontSize: 20,
    color: 'black',
  },
});
export default Api;
