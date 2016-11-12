import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ToDoItem key={0}/>
        <ToDoItem key={1}/>
        <ToDoItem key={2}/>
        <ToDoItem key={3}/>
        <ToDoItem key={4}/>
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
