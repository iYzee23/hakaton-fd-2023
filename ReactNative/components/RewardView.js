import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Modal, Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import FuelGame from '../FuelGame';
import React, { useRef, useState, useEffect } from 'react';


export default function RewardView({emptyFunction}) {
    
    const [casePayment, setPayment] = useState(true);
    const [casePaidOne, setPaidOne] = useState(false);
    const [casePaidTwo, setPaidTwo] = useState(false);
    const [casePaidThree, setPaidThree] = useState(false);
    const [casePaidFour, setPaidFour] = useState(false);

  return (
    <View style={casePayment && !casePaidOne && !casePaidTwo && !casePaidThree && !casePaidFour ? styles.wrapper : styles.wrapperOne}>

        {casePayment && !casePaidOne && !casePaidTwo && !casePaidThree && !casePaidFour && (
            
            <View style={styles.wrapper}>
                <View>
                    <Image source={require('../assets/placanje.png') } style={styles.image} />
                </View>

                <View style={styles.containerFSC}>
                <TouchableOpacity  onPress={() =>  setPaidOne(true) }>
                    <View style={[globalStyles.buttonStyle,styles.buttonPay ]}>
                        <Text style={ globalStyles.buttonTextWhite}>Plati</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={ [globalStyles.buttonStyle,styles.buttonQuit] }>
                        <Text style={ globalStyles.buttonText}>Odustani</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>


        )}
        
        {casePayment && casePaidOne && !casePaidTwo && !casePaidThree && !casePaidFour && (
            <>
            <View style={styles.flex}>
            <View style={styles.logoImage}>
                <Image source={require('../assets/uspesnoPlacanje.png') }/>
            </View>
            <View style={styles.giftContainer}>
                <Image style={styles.giftStyle} source={require('../assets/gift.png')} />
                <View style={styles.textAndButton}>
                    <Text style={globalStyles.entertainmentText}>Osvojili ste nagradu!</Text>

                    <TouchableOpacity  onPress={() => setPaidTwo(true)}>
                        <View style={globalStyles.buttonStyle }>
                            <Text style={globalStyles.buttonText}>Preuzmi nagradu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </>
        )}

        {casePayment && casePaidOne && casePaidTwo && !casePaidThree && !casePaidFour && (
            <>
            <View style={styles.flex}>
                <View style={styles.logoImage}>
                    <Image source={require('../assets/uspesnoPlacanje.png') }  />
                </View>
                <View style={styles.giftContainer}>

                    <Image style={  styles.couponStyle} source={require('../assets/gdrivead.png') } />
                    <TouchableOpacity  onPress={() => setPaidThree(true)}>
                        <View style={  globalStyles.buttonStyle }>
                            <Text style={ globalStyles.buttonText}>Dodaj kupon u inventar</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
            </>
        )}

        {casePayment && casePaidOne && casePaidTwo && casePaidThree && !casePaidFour && (
            <>
            <View style={styles.flex}>
                <View style={styles.logoImage}>
                    <Image source={require('../assets/uspesnoPlacanje.png') }  />
                </View>
                <View style={styles.giftContainer}>
                    <Image style={styles.oceni} source={require('../assets/oceniIskustvo.png')} />
                </View>
            </View>
            </>
          

        )}
        
    </View>
  );
}
  

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    wrapper: {
        flex: 1,
       // backgroundColor: '#083694',
       backgroundColor: 'rgb(242,242,242)',
    },
    wrapperOne:{
        flex:1,
        backgroundColor: '#083694',
    },

  giftContainer:{
    flex: 4,
    backgroundColor: '#ffffff',
    alignItems: 'center',

    marginTop: 20,
    paddingVertical: 30,
    marginVertical: 10,
    marginHorizontal: 20,
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
    width: '100%',
    resizeMode: 'contain',
  },
  largerCoupon:{
    width: '80%',
    height: '100%',
    marginTop: 20,
  },
  textAndButton:{
    marginVertical:40
  },
  game: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
    logoImage:{
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    image:{
        height: '90%',
        width: '100%',
    },
    containerFSC:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -90,
    },
    buttonPay:{
        backgroundColor: 'rgb(255,127,27)'
    },
    buttonQuit:{
        backgroundColor: 'white'
    },
});
