import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState("Savic ima najvecu kitu! Mirko je sisica");

  useEffect(() => {
    fetch('http://192.168.0.23:8000/cc4/getUsers/')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
