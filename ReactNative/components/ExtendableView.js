import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import FuelGame from '../FuelGame';

export default function ExpandableView({emptyFunction}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const imagePositions = [
        { top: 50, left: 50 },
        { top: 100, left: 150 },
        // ... add more positions
    ];

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
                <TouchableOpacity  onPress={() => setIsExpanded(!isExpanded)}>
                    <View style={ isExpanded ? styles.invisible : globalStyles.buttonStyle }>
                        <Text style={globalStyles.buttonText}>Generic Clickbait Caption</Text>
                    </View>
                </TouchableOpacity>
                </View>
            )}
            {isExpanded && (
                <View style={styles.game}>

                    <View style={styles.container}>
                        <FuelGame width={300} height={350} />
                    </View>

                    <Text style={globalStyles.entertainmentText }>IGRICA</Text>
                    <TouchableOpacity  onPress={() => setIsExpanded(!isExpanded)}>
                        <View style={globalStyles.buttonStyle }>
                            <Text style={globalStyles.buttonText}>Obustavi igru</Text>
                        </View>
                    </TouchableOpacity>
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
    flex: 1,
    backgroundColor: '#083694',
    alignItems: 'center',
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
