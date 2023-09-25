import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
  },
});
