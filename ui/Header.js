import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    backgroundColor: '#48288B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24
  }
});

export default Header
