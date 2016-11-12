import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Mark from './Mark'

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Mark />
        <Text style={styles.text}>item</Text>
        <Image style={styles.image} source={require('./images/iconCross.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#BABABA',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 20
  },
  text: {
    flex:1
  },
  image: {
    resizeMode: 'contain',
    height: 15,
    width: 15
  }
});

export default ToDoItem
