import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import SearchBar from './SearchBar'
import ToDoList from './ToDoList'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <ToDoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default Main
