import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const FlashingButton = ({ onPress, disabled }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const interval = setInterval(() => {
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 0.2,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    })
                ]),
                Animated.sequence([
                    Animated.timing(scaleAnim, {
                        toValue: 1.1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    })
                ])
            ]).start();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.glowContainer}>
            <Animated.View style={{ opacity: disabled ? 0.2 : fadeAnim }}>
                <TouchableOpacity onPress={disabled ? null : onPress} disabled={disabled} style={styles.button}>
                    <Text style={styles.buttonText}>Osvojite vredne nagrade</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: '#083694',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',   // Center text vertically inside the button
        alignItems: 'center',       // Center text horizontally inside the button
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',       // Ensure the text itself is centered
    },
});


export default FlashingButton;
