import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ExtendableView from './ExtendableView'
import RewardView from './RewardView';
import { globalStyles } from '../styles/global'

export default function NagradaScreen({emptyFunction}) {
    return (
        <View style={styles.container}>

        
        <View style={styles.entertainmentContainer}>
            <RewardView emptyFunction={emptyFunction}>
            </RewardView>
        </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#083694',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
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
  });