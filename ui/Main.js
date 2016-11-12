import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import SearchBar from './SearchBar'
import ToDoList from './ToDoList'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };
  }
  onSendText(text) {
    var currentList = this.state.list
    currentList[text] = false
    this.setState({ list : currentList })
  }
  onToggleActive(title) {
    var currentList = this.state.list
    currentList[title] = !currentList[title]
    this.setState({ list : currentList })
  }
  onRemoveItem(title) {
    var currentList = this.state.list
    delete currentList[title]
    this.setState({ list : currentList })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SearchBar onSendText={this.onSendText.bind(this)} />
        <ToDoList
          onRemoveItem={this.onRemoveItem.bind(this)}
          onToggleActive={this.onToggleActive.bind(this)}
          list={this.state.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default Main
