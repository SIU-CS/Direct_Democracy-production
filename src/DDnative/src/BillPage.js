/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, Navigator} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

const onButtonPress = () => {
	
};


class BillPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.arrContainer}>
					<TouchableHighlight underlayColor = 'rgba(255,255,255,.2)' onPress = {onButtonPress}>
						<ResponsiveImage
							source={require('./barrow.png')}
							initWidth="60"
							initHeight="50"/>
					</TouchableHighlight>
				</View>

				<Text style={styles.billName}>
					(Bill title)
				</Text>
				
				<Text style={styles.billText}>
					(Bill Text)
				</Text>
				
				<View style={styles.updownContainer}>
					<TouchableHighlight underlayColor = 'green' onPress={onButtonPress}>
						<ResponsiveImage
								source={require('./tup.png')}
								initWidth="100"
								initHeight="100"/>
					</TouchableHighlight>
					
					<TouchableHighlight underlayColor = 'red' onPress={onButtonPress}>
						<ResponsiveImage
								source={require('./tdown.png')}
								initWidth="100"
								initHeight="100"/>
					</TouchableHighlight>
				</View>
			</View>
		);
  }
}

const styles = StyleSheet.create({
	arrContainer: {
		flexDirection: 'row',
		padding: 10,
	},
	updownContainer: {
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	container: {
		flex: 1,
		backgroundColor: '#3498db',
	},
	billName: {
		fontSize: 35,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 30,
		marginBottom: 20,
		color: '#fff',
	},
	billText: {
		fontSize: 18,
		marginTop: 30,
		marginBottom: 20,
		color: '#fff',
		padding: 20,
	},
});

export default BillPage;