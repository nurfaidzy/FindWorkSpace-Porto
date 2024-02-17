/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <Text>Hello Word</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default App;
