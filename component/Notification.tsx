import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {BackArrow, Ellipse} from '../asset';

const hotelData = [
  {
    id: '1',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '2',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '3',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '4',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '5',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '6',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '7',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
  {
    id: '8',
    description:
      'Book your dream hotel in just a few clicks! Enjoy\namazing discounts and offers with Abhjeet Hotel\nBooking. Make your travel experience unforgettable!',
    time: '12:30 PM',
  },
];

const Notification = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.content}>
      <View style={styles.ellipseContainer}>
        <Ellipse />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.description}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.horizontalLine} />
      <FlatList
        data={hotelData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.horizontalLine1} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e8f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
    color: 'black',
    fontWeight: '600',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  ellipseContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  timeText: {
    textAlign: 'right',
    fontSize: 12,
    marginTop: 10,
    fontWeight: '400',
  },
  text1: {
    fontSize: 13,
  },
  horizontalLine1: {
    height: 1,
    backgroundColor: '#bfbfbf',
    marginVertical: 16,
    marginHorizontal: 16,
  },
});

export default Notification;
