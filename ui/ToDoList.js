import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoItem from './ToDoItem'


class ToDoList extends Component {
  render() {
    var self = this
    var todoListNodes = Object.keys(this.props.list).map(function(item, index) {
      return (
        <ToDoItem
          title={item}
          onRemoveItem={self.props.onRemoveItem}
          onToggleActive={self.props.onToggleActive}
          active={self.props.list[item]}
          key={index}
        />
      )
    })
    return (
      <View style={styles.container}>
        { todoListNodes }
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
