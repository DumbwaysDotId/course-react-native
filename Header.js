import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      showTitle: false
    }

    setInterval(() => {
      this.setState({
        showTitle: !this.state.showTitle
      })
    }, 1000)

  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.showTitle ? <Text style={styles.textHeader}>{this.props.title}</Text> : null}
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