import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ExpandableView({emptyFunction}) {
  // Declare a state variable to determine if the view is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.wrapper}>

        {!isExpanded && (
            <View style={[styles.mapContainer, isExpanded ? styles.invisible : {}]}>
                <Image style={styles.mapStyle} source={require('../assets/mapExample.png')} />
                <Text style={globalStyles.entertainmentText}>Sa gorivom koje ste natocili prosli put, mogli ste da stignete do MestoX!</Text>
            </View>
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
});
