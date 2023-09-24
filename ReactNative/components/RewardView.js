import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Modal, Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import FuelGame from '../FuelGame';
import React, { useRef, useState, useEffect } from 'react';


export default function RewardView({emptyFunction}) {
    
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClaimed, setIsClaimed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
        
        {!isExpanded && (
            <>
            <View style={styles.giftContainer}>
                <Image style={styles.giftStyle} source={require('../assets/gift.png')} />
                <View style={styles.textAndButton}>
                    <Text style={globalStyles.entertainmentText}>Osvojili ste nagradu!</Text>

                    <TouchableOpacity  onPress={() => setIsExpanded(!isExpanded)}>
                        <View style={globalStyles.buttonStyle }>
                            <Text style={globalStyles.buttonText}>Preuzmi nagradu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        )}

        {isExpanded && (
                <View style={styles.giftContainer}>

                    <View style={styles.container}>
                        <Image style={ isClaimed ?  styles.largerCoupon : styles.couponStyle} source={require('../assets/temporary.png')} />
                        <TouchableOpacity  onPress={() => setIsClaimed(!isClaimed)}>
                            <View style={ isClaimed ?  styles.invisible : globalStyles.buttonStyle }>
                                <Text style={ globalStyles.buttonText}>Dodaj kupon u inventar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
        )}

        {isClaimed && (
                <View style={styles.ocenaContainer}>
                    <Image style={styles.oceni} source={require('../assets/oceniIskustvo.png')} />
                </View>
        )}
        
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
  giftContainer:{
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 320,
    height: '70%',
    marginTop: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 5,
  },
  ocenaContainer:{
    flex: 3,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 320,
    height: '70%',
    marginVertical:30,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 5,
  },
  giftStyle:{
    width: '50%',
    height: '35%',
    marginVertical: 40,
  },
  couponStyle:{
    width: '90%',
    height: '30%',
    marginVertical: 40,
  },
  oceni:{
    width:'90%',
    height: '80%',
  },
  largerCoupon:{
    width: '80%',
    height: '100%',
    marginTop: 20,
  },
  textAndButton:{
    marginVertical:40
  },
  invisible: {
    opacity: 0, 
  },
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  
  game: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    overlay: {
        position: 'absolute',
        top: 15,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    popup: {
        width: 300,
        height: 320,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});
