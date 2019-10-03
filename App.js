// import lib React for define component
import React, { Component } from 'react';
// import native component react-native
import { View, Text, StyleSheet } from 'react-native';

// create class component
class App extends Component {

  // use the render function to define the component appearance
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHelloWorld}>Hello World</Text>
      </View>
    )
  }
}

// don't forget to export the components
export default App;

// define style with StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHelloWorld: {
    fontSize: 30
  }
})