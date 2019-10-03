import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Content</Text>
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