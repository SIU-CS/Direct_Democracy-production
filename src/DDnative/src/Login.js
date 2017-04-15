import React, { Component } from 'react';
import {TouchableHighlight, TextInput, StyleSheet, Text, View} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

const onButtonPress = () => {
	
};

class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Direct Democracy
				</Text>
				
				<View style={styles.logoContainer}>
					<ResponsiveImage
						source={require('./logo.png')}
						initWidth="60"
						initHeight="252"/>
						
					<Text style={{color:'#fff',fontSize:18,marginTop:5,textAlign:'center',}}>
						Your Vote. Your Voice.
					</Text>
				</View>
				
				<TextInput
					placeholder="Email"
					placeholderTextColor='rgba(255,255,255,0.7)'
					style={styles.input}/>
					
				<TextInput
					placeholder="Password"
					placeholderTextColor='rgba(255,255,255,0.7)'
					style={styles.input}/>
				
				<TouchableHighlight underlayColor = 'rgba(255,255,255,0.7)' onPress = {onButtonPress}>
					<Text style = {styles.button}>
						Login
					</Text>
				 </TouchableHighlight>
			</View>
		  
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		  padding: 10,
	},
	welcome: {
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 4,
		marginBottom: 10,
		color: '#fff',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
	},
    logo: {
        height: 420,
        width: 100,
    },
    input: {
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        marginBottom: 20,
        height:40,
    },
	button: {
		fontSize: 16,
		color: '#fff',
		borderWidth: 3,
		padding: 10,
		borderColor: 'rgba(255,255,255,0.2)',
		textAlign: 'center',
	},
});

export default Login;
