/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Home from './src/pages/home';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
