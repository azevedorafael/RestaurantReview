/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Restaurant Review</Text>

        <Text>React Cafe</Text>
        <Text style={{'color': 'grey'}}>
          123 Anywhere St
        </Text>

        <Text>React Native Cafe</Text>
        <Text style={{'color': 'grey'}}>
          123 Main St
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066cc',
    fontWeight: '300'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
