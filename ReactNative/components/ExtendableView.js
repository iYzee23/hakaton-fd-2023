import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Modal, Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import FuelGame from '../FuelGame';
import React, { useRef, useState, useEffect } from 'react';
import FlashingButton from '../FlashingButton';


export default function ExpandableView({emptyFunction, endCountdown}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [timer, setTimer] = useState(null);
    const [countdown, setCountdown] = useState(null);

    const imagePositions = [
        { top: 50, left: 50 },
        { top: 100, left: 150 },
        // ... add more positions
    ];

    const gameRef = useRef(null);
    const [gameWidth, setGameWidth] = useState(0);
    const [gameHeight, setGameHeight] = useState(0);

    useEffect(() => {
        if (gameRef.current) {
            gameRef.current.measure((x, y, width, height) => {
                setGameWidth(width * 0.9);
                setGameHeight(height * 0.8);
            });
        }
    }, []);

    const startGame = () => {
        setIsExpanded(true);
        const gameDuration = 15;  // in seconds
        setTimer(
            setTimeout(() => {
                setIsExpanded(false);
                setButtonDisabled(true);
            }, gameDuration * 1000)
        );
    
        // Countdown logic
        setTimeout(() => {
            let countdownValue = 5;
            setCountdown(countdownValue);
            const interval = setInterval(() => {
                countdownValue -= 1;
                setCountdown(countdownValue);
                if (countdownValue <= 0) {
                    clearInterval(interval);
                    setCountdown(null);
                }
            }, 1000);
        }, (gameDuration - 5) * 1000);
    }
    

  return (
    <View style={styles.wrapper}>
        {!isExpanded && (
            <>
            <View style={[styles.mapContainer, isExpanded ? styles.invisible : {}]}>
                <Image style={styles.mapStyle} source={require('../assets/mapExample.png')} />


                {imagePositions.map((position, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{ position: 'absolute', top: position.top, left: position.left }} 
                        onPress={() => setModalVisible(true)}
                    >
                        <Image style={styles.smallImageStyle} source={require('../assets/mapPin.png')} />
                    </TouchableOpacity>
                ))}

                <Text style={globalStyles.entertainmentText}>Sa gorivom koje ste natocili prosli put,
                 mogli ste da stignete do MestoX!</Text>
            </View>


            {modalVisible && (
                <TouchableOpacity 
                    style={styles.overlay} 
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.popup}>
                        <Text style={styles.closeText}>X</Text>
                        <View style={styles.pinPlace}>
                            <Image style={styles.smallImageStyle} source={require('../assets/mapPin.png')} />
                            <Text style={[globalStyles.stationInfoText, styles.naslov]}>Naziv mesta</Text>
                        </View>
                        
                        <Text style={[globalStyles.captionText, styles.tekst]}>Informacije o odredjenom mestu
                         koje je oznaceno pinom. Neki fun fact, sta se moze razgledati u okolini i slicno...</Text>
                    </View>
                </TouchableOpacity>
            )}
            </>
        )}
        

        <View style={isExpanded ? styles.expandedContainer : styles.gameContainer}>
            {!isExpanded && (
                <View>
                <Text style={ isExpanded ? styles.invisible : globalStyles.entertainmentText }>Igrajte igricu i osvojite nagrade!</Text>
                {/* <TouchableOpacity  onPress={() => setIsExpanded(!isExpanded)}>
                    <View style={ isExpanded ? styles.invisible : globalStyles.buttonStyle }>
                        <Text style={globalStyles.buttonText}>Generic Clickbait Caption</Text>
                    </View>
                </TouchableOpacity> */}
                <FlashingButton onPress={startGame} disabled={isButtonDisabled} />
                </View>
            )}
            {isExpanded && (
                <View style={styles.game} ref={gameRef}>

                    <View style={styles.container}>
                        <FuelGame width={320} height={370} countdown={countdown} endCountdown={endCountdown}/>
                        <TouchableOpacity onPress={() => {
                            setIsExpanded(!isExpanded);
                            setButtonDisabled(true);
                            if (timer) {
                                clearTimeout(timer);
                                setTimer(null);
                            }
                        }}>
                            <View style={globalStyles.buttonStyle}>
                                <Text style={globalStyles.buttonText}>Obustavi igru</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
  gameContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: '20%',
    marginBottom: 15,
    borderRadius: 20,
    elevation: 5,
  },
  expandedContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: '90%',
    marginTop: 20,
    borderRadius: 20,
    elevation: 5,
  },
  mapContainer:{
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: '70%',
    marginVertical:15,
    borderRadius: 20,
    elevation: 5,
  },
  mapStyle:{
    width: '90%',
    height: '80%',
  },
  invisible: {
    opacity: 0, 
  },
  container: {
    flex: 5,
    backgroundColor: 'rgb(151,141,130)',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //odavde dodato
    width: '100%',
    height: '100%',
    top: 0,
  },
  
  game: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImageStyle: {
    width: 40, // or whatever size you need
    height: 40, 
    },
    overlay: {
        position: 'absolute',
        top: 15,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent overlay
    },
    popup: {
        width: 300,
        height: 320,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText:{
        position: 'absolute', 
        top: 5, 
        right: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    naslov:{
        fontSize: 20,
        paddingVertical: 20
    },
    tekst:{
        fontSize: 15,
        padding: 10
    },
    pinPlace:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
   
});
