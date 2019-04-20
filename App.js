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
  { name: 'React Cafe1', address: '123 AN' },
  { name: 'Fancy Restaurant2', address: '799 Main St' },
  { name: 'Taco Place2', address: '550 Maple Rd' },
  { name: 'React Cafe3', address: '123 AN' },
  { name: 'Fancy Restaurant4', address: '799 Main St' },
  { name: 'Taco Place5', address: '550 Maple Rd' },
  { name: 'React Cafe6', address: '123 AN' },
  { name: 'Fancy Restaurant7', address: '799 Main St' },
  { name: 'Taco Place8', address: '550 Maple Rd' },
  { name: 'React Cafe9', address: '123 AN' },
  { name: 'Fancy Restaurant11', address: '799 Main St' },
  { name: 'Taco Place12', address: '550 Maple Rd' },
  { name: 'React Cafe13', address: '123 AN' },
  { name: 'Fancy Restaurant14', address: '799 Main St' },
  { name: 'Taco Place15', address: '550 Maple Rd' },
  { name: 'React Cafe16', address: '123 AN' },
  { name: 'Fancy Restaurant17', address: '799 Main St' },
  { name: 'Taco Place18', address: '550 Maple Rd' },
  { name: 'React Cafe19', address: '123 AN' },
  { name: 'Fancy Restaurant20', address: '799 Main St' },
  { name: 'Taco Place21', address: '550 Maple Rd' },
  { name: 'React Cafe22', address: '123 AN' },
  { name: 'Fancy Restaurant23', address: '799 Main St' },
  { name: 'Taco Place24', address: '550 Maple Rdd' },
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
