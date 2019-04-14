/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const restaurants = [
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' }
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Restaurant Review</Text>

        {
          restaurants.map((place, index) => {
            return (
              <View key={place.name} style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={{ flexDirection: 'column', flex: 8 }}>
                  <Text>{place.name}</Text>
                  <Text style={{ 'color': 'grey' }}>{place.address}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Info</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1
  },
  welcome: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066cc',
    fontWeight: '300'
  }
});
