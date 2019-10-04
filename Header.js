import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>{this.props.title}</Text>
      </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderBottomWidth: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    fontSize: 20,
    color: 'white'
  }
})