import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoItem from './ToDoItem'


class ToDoList extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ACF0F2'
  }
});

export default ToDoList
