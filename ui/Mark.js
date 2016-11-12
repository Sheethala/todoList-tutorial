import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Mark extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#0096B8',
    marginRight: 10
  },
});

export default Mark
