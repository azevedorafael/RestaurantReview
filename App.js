/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderStlye from './HeaderStyle'

const restaurants = [
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' }
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={HeaderStlye.header}>Restaurant Review</Text>

        {
          restaurants.map((place, index) => {
            return (
              <View key={place.name} style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }
              ]}>
                <View style={styles.edges}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.nameAddress}>
                  <Text>{place.name}</Text>
                  <Text style={styles.addressText}>{place.address}</Text>
                </View>

                <View style={styles.edges}>
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
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5
  },
  nameAddress: {
    flexDirection: 'column', flex: 8
  },
  addressText: {
    'color': 'grey'
  }
});
