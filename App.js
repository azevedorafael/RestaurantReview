/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import Header from 'components/Header'

const restaurants = [
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: 'React Cafe', address: '123 AN' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
]

export default class App extends Component {

  state = {
    search: null
  }

  render() {
    return (
      <View style={styles.container}>

        <Header />

        <TextInput
          style={styles.input}
          placeholder={'Live search'}
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />

        <ScrollView contentContainerStyle={{
          paddingTop: 30
        }}>
          {
            restaurants
              .filter(place => {
                return !this.state.search ||
                  place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
              })
              .map((place, index) => {
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
        </ScrollView>

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
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
});
