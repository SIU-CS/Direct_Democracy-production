/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './src/Login';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class DDnative extends Component {
  render() {
    return (
        <Login />
        )
  }
}


AppRegistry.registerComponent('DDnative', () => DDnative);
