/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const onButtonPress = () => {
	
};

class BillPage extends Component {
  render() {
    return (
      <View style={styles.container}>
	    <View style={styles.burgerContainer}>
			<Button
				title="Burger!"
				onPress={onButtonPress}
				color='black'/>
		</View>
		
		<Text style={styles.billName}>
		    (Bill title)
		</Text>
		
		<Text style={styles.billByline}>
			(Byline)
		</Text>
		
		<Text style={styles.billText}>
			(Bill Text)
		</Text>
		
		<View style={styles.updownContainer}>
			<Button
				title="Up!"
				onPress={onButtonPress}
				color='green'/>
			<Button
				title="Down!"
				onPress={onButtonPress}
				color='red'/>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  burgerContainer: {
	  width: 50,
  },
  updownContainer: {
	  justifyContent: 'space-around',
	  flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db',
      padding: 20,
  },
  
  billName: {
	  fontSize: 35,
	  fontWeight: 'bold',
	  textAlign: 'center',
	  marginTop: 30,
	  marginBottom: 20,
		color: '#fff',
  },
  billByline: {
	  fontSize: 30,
	  marginTop: 30,
	  marginBottom: 20,
	  color: '#fff',
  },
  billText: {
	  fontSize: 18,
	  marginTop: 30,
	  marginBottom: 20,
	  color: '#fff',
  },
});
export default BillPage;
