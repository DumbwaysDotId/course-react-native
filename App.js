// import lib React for define component
import React, { Component } from 'react';
// import native component react-native
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import Content from './Content';

// create class component
class App extends Component {

  // use the render function to define the component appearance
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
      </View>
    )
  }
}

// don't forget to export the components
export default App;

// define style with StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textHelloWorld: {
    fontSize: 30
  }
})