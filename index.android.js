/*
React Native iOS entry point
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class todoList extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello world!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('todoList', () => todoList);
