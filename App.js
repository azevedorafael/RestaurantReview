/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

import Header from 'components/Header'

import RestaurantRow from 'components/RestaurantRow'

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

        <FlatList
          data={
            restaurants
              .filter(place => {
                return !this.state.search ||
                  place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
              })
          }
          renderItem={({ item, index }) =>
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
