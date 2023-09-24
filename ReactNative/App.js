import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ExtendableView from './components/ExtendableView'
import { globalStyles } from './styles/global';
import TocenjeScreen from './components/TocenjeScreen';
import NagradaScreen from './components/NagradaScreen';

export default function App() {
  const [station, setStation] = useState("Primer Ulice 23, Beograd");
  const [spotNumber, setSpotNumber ] = useState("Tociono mesto 4");

  const [tocenjeScreen, setTocenjeScreen] = useState(false);
  const [nagradaScreen, setNagradaScreen] = useState(true);

  useEffect(() => {
    fetch('http://192.168.0.23:8000/cc4/getUsers/')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, []);

  const emptyFunction = () => {
    return;
  }

  return (
    <View style={styles.container}>
    {tocenjeScreen && (
      <>
      <View >
        <TocenjeScreen station={station} spotNumber={spotNumber} emptyFunction={emptyFunction}></TocenjeScreen>
      </View>
      </>
    )}

    {nagradaScreen && (
      <>
      <View >
        <NagradaScreen emptyFunction={emptyFunction}></NagradaScreen>
      </View>
      </>
    )}

    <StatusBar style="auto" />
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