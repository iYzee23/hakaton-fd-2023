// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import FuelGame from './FuelGame';

const App = () => {
  return (
    <View style={styles.container}>
      <FuelGame width={400} height={500} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;