import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import ExtendableView from './ExtendableView'
import { globalStyles } from '../styles/global'

export default function TocenjeScreen({station, spotNumber, emptyFunction, startTimerAndSwitchScreen, endCountdown }) {
    
  const [countdown, setCountdown] = useState(null);
  const inGameMode = useRef(false);

  
  return (
    <View>
    <View style={styles.logoImage}>
        <Image source={require('../assets/zapocniTocenje.png')} />
        <View style={globalStyles.stationInfoContainer}>
          <View style={styles.infoCont}>
            <Text style={globalStyles.captionText}>Benzinska stanica: <Text style={globalStyles.stationInfoText}>{station}</Text></Text>
          </View>
          <View style={styles.infoCont}>
            <Text style={globalStyles.captionText}>Tociono mesto: <Text style={globalStyles.stationInfoText}>{spotNumber}</Text></Text>
          </View>
        </View>
    </View>

    <View style={styles.entertainmentContainer}>

    <ExtendableView emptyFunction={emptyFunction} endCountdown={endCountdown}>
    </ExtendableView>

    </View>

    <View style={styles.cancelContainer}>
    <TouchableOpacity onPress={() => {
      if (inGameMode.current) {
        let timer = 5;
        setCountdown(timer);
        const interval = setInterval(() => {
          timer -= 1;
          setCountdown(timer);
          if (timer <= 0) {
            clearInterval(interval);
            startTimerAndSwitchScreen();
          }
        }, 1000);
      } else {
        startTimerAndSwitchScreen();
      }
      inGameMode.current = false;  // Ensure you're no longer in game mode
    }}>
            <View style={globalStyles.buttonStyle}>
                <Text style={globalStyles.buttonText}>Odustani</Text>
            </View>
        </TouchableOpacity>
    </View>
    </View>
    )
}

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