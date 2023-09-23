import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ExtendableView from './components/ExtendableView'
import { globalStyles } from './styles/global';
import FlashingButton from './FlashingButton';

export default function App() {
  return (
    <View style={styles.container}>
      <FlashingButton onPress={() => {
        // Handle the button press here
        console.log('Button pressed!');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#083694',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom:20,
    height: 10,
  },
  entertainmentContainer:{
    flex: 6,
    backgroundColor: '#f0f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 5,
  },

  gameContainer:{
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    marginBottom:15,
    borderRadius: 20,
    elevation: 5,
  },
  cancelContainer:{
    flex: 1,
    backgroundColor: '#f0f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 5,
  },
  infoCont:{
    padding: 3,
    borderBottomWidth: 1,
    borderColor: '#7a7a7a'
  },
});