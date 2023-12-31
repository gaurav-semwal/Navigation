import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AC, Bathroom, Cup, Frame, Wifi} from '../asset';
const Card2 = () => {
  return (
    <>
      <TouchableOpacity>
        <Text style={styles.text}>Rooms Listed</Text>
        <View style={styles.bookingContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Deluxe King Room</Text>
            <Text>Non-Refundable</Text>
            <Text>-Price for 1 Adult</Text>
            <Text>-1 Extra-large double bed</Text>
            <Text>-Room size: 14x14</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
                <Cup />
                Breakfast included in the price
              </Text>
              <Text style={styles.detailsText}>
                <Bathroom />
                Private Bathroom
              </Text>
              <Text style={styles.detailsText}>
                <Wifi />
                Free WiFi
              </Text>
              <Text style={styles.detailsText}>
                <AC />
                Air Conditioning
              </Text>
            </View>
            <Text>Price for 1 night (18 Mar - 19 Mar)</Text>
            <Text style={styles.detailsText1}>₹ 3,493</Text>
            <Text>+ ₹ 594 taxes and fee</Text>
            <View style={styles.button}>{/* <Button /> */}</View>
          </View>
          <View style={styles.imageContainer}>
            <Frame style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  card1: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 18,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  bookingContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 18,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  textContainer: {
    flex: 2,
    marginRight: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  image: {
    width: 80,
    height: 100,
    left: '50%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsText: {
    marginBottom: 5,
    color: '#24A966',
    fontWeight: 'bold',
  },
  detailsText1: {
    color: '#1E91B6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: '7%',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: '6%',
    lineHeight: 22,
  },
  hotelInfoContainer: {
    alignItems: 'center',
  },
  hotelName: {
    fontWeight: 'bold',
    fontSize: 22,
    flexDirection: 'row',
    marginLeft: 22,
    letterSpacing: 2,
    marginTop: 10,
  },
  location: {
    color: '#6D6D6D',
    fontWeight: '600',
    fontSize: 16,
    marginRight: '50%',
  },
  paymentTitle: {
    fontWeight: 500,
    fontSize: 16,
    color: '#71717A',
  },
  paymentDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentPercentage: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
  paymentAmount: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#18181B',
  },
  bookingTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bookingDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingPercentage: {
    color: '#EF4444',
    fontWeight: 'bold',
  },
  bookingCount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: '6%',
    lineHeight: 30,
  },
});
export default Card2;
