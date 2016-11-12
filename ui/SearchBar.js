import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleEditText() {

  }
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput style={styles.inputBar}
          onChangeText={this.handleEditText}
          placeholder={"Start typing"}
          editable={true}
        />
        <View>
          <Image style={styles.image} source={require('./images/sendTeal.png')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 60,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10
  },
  inputBar: {
    paddingLeft: 10,
    margin:10,
    flex:1,
    backgroundColor: '#fff'
  },
  image: {
    resizeMode: 'contain',
    height:40,
    width: 40
  }
});

export default SearchBar
