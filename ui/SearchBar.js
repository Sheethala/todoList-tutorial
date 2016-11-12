import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableHighlight } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleEditText(e) {
    this.setState({ text : e })
  }
  handleSendText() {
    this.props.onSendText(this.state.text)
  }
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput style={styles.inputBar}
          onChangeText={this.handleEditText.bind(this)}
          placeholder={"Start typing"}
          editable={true}
          value={this.state.text}
        />
        <TouchableHighlight underlayColor="transparent" onPress={this.handleSendText.bind(this)}>
          <View>
            <Image style={styles.image} source={require('./images/sendTeal.png')}/>
          </View>
        </TouchableHighlight>
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
