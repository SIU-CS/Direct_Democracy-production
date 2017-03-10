/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

const onButtonPress = () => { Alert.alert("I have been pressed!") };

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Register Account
        </Text>
            <TextInput
        placeholder="Email"
        placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.input}
            />
            <TextInput
        placeholder="Password"
        placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.input}
        />
			<TextInput
        placeholder="Confirm Password"
        placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.input}
        />
		<Button
			onPress={onButtonPress}
			title="Register Account"
			color="black"
			accessibilityLabel="Register" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
      padding: 20,
  },
  welcome: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
      color: '#fff',
  },
    input: {
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        marginBottom: 20,
        height:40,
    },
});

AppRegistry.registerComponent('Test', () => Test);
