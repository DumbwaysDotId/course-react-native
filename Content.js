import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

function Content(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>{props.textContent}</Text>
    </View>
  )
}

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContent: {
    fontSize: 40
  }
})