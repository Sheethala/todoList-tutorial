import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Mark from './Mark'

class ToDoItem extends Component {
  handleToggleActive() {
    this.props.onToggleActive(this.props.title)
  }
  handleRemoveItem() {
    this.props.onRemoveItem(this.props.title)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight underlayColor="transparent" onPress={this.handleToggleActive.bind(this)} >
          <View>
            <Mark active={ this.props.active } />
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>{ this.props.title }</Text>
        <TouchableHighlight underlayColor="transparent" onPress={this.handleRemoveItem.bind(this)} >
          <Image style={styles.image} source={require('./images/iconCross.png')} />
        </TouchableHighlight>
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
