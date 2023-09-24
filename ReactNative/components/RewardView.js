import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Modal, Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import FuelGame from '../FuelGame';
import React, { useRef, useState, useEffect } from 'react';


export default function RewardView({emptyFunction}) {
    
    const [isPaid, setIsPaid] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClaimed, setIsClaimed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>

        {!isPaid && (
            <>
            <View style={styles.containerFSC}>
                <Image style={styles.fullPic} source={require('../assets/placanjeVECE.png')} />

                <TouchableOpacity  onPress={() => setIsClaimed(!isClaimed)}>
                    <View style={ isClaimed ?  styles.invisible : [globalStyles.buttonStyle,styles.buttonOverPhotoOne ]}>
                        <Text style={ globalStyles.buttonText}>Plati</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => setIsClaimed(!isClaimed)}>
                    <View style={ isClaimed ?  styles.invisible : [globalStyles.buttonStyle,styles.buttonOverPhotoTwo ] }>
                        <Text style={ globalStyles.buttonText}>Odustani</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </>
        )}
        
        {!isExpanded && isPaid && (
            <>
            <View style={styles.logoImage}>
                <Image source={require('../assets/uspesnoPlacanje.png') } style={styles.image} />
            </View>
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

        {isExpanded && isPaid && (
            <>
            <View style={styles.logoImage}>
                <Image source={require('../assets/uspesnoPlacanje.png') } style={styles.image} />
            </View>
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
                </>
        )}

        {isClaimed && isPaid && (
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
    logoImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom:20,
    },
    image:{
        height: 100,
        width: 250,
    },
    fullPic:{
        flex: 1,
        width: 385,          
        resizeMode: 'stretch',   
        transform: [{ scaleY: 1.03 }], 
    },
    containerFSC:{
        flex:1,
        position: 'relative',
        width: '100%',
        height: '100%', // or any desired height
    },
    buttonOverPhotoOne: {
        position: 'absolute',
        bottom: 65,   
        left: 11,  
        width: '95%', 
        height: 55,
        backgroundColor: 'orange',
    },
    buttonOverPhotoTwo: {
        position: 'absolute',
        bottom: -5,   
        left: 11,  
        width: '95%', 
        height: 55,
    },
   
});
