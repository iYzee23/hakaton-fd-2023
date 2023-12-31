import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, PanResponder, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import FireImage from './assets/Fire.png'
import YugoImage from './assets/Yugo.png'
import GDriveImage from './assets/WhiteGDrive.png'
import CanisterImage from './assets/GreenCanister.png'
import FuelImage from './assets/GreenFuel.png'
import CityImage from './assets/AnaLu.png'

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

const FuelGame = ({ width, height, countdown, endCountdown }) => {
  const [score, setScore] = useState(0);
  const [circles, setCircles] = useState([]);
  const [gameTime, setGameTime] = useState(30); // 1 minute
  const gameIsActive = useRef(true);



  const collectorWidth = 100 * width / BASE_WIDTH;
  const collectorHeight = 50 * height / BASE_HEIGHT;
  const circleSize = 50 * width / BASE_WIDTH;

  const positionRef = useRef(new Animated.Value(width / 2 - collectorWidth / 2));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      let newX = gesture.moveX - collectorWidth / 2;
      if (newX < 0) {
        newX = 0;
      }
      if (newX > width - collectorWidth) {
        newX = width - collectorWidth;
      }
      positionRef.current.setValue(newX);
    }
  });

  const gameTimer = setInterval(() => {
    if (gameIsActive.current) {
      setGameTime(prevTime => {
        if (prevTime === countdown) {
          gameIsActive.current = false;
        }
        if (prevTime <= 1) {
          clearInterval(gameTimer);
          return 0;
        }
        return prevTime - 1;
      });
    }
  }, 1000);

  useEffect(() => {
    const generateCircles = setInterval(() => {
        const goodImages = [GDriveImage, FuelImage, CanisterImage];
        const randomGoodImage = goodImages[Math.floor(Math.random() * 3)];
        const isBad = Math.random() > 0.5;

        const newCircle = {
            id: Math.random().toString(),
            position: new Animated.Value(-circleSize + 40),
            start: Math.random() * (width - circleSize),
            isBad: isBad,
            image: isBad ? FireImage : randomGoodImage,
            opacity: new Animated.Value(0)
          };

      const animation = Animated.timing(newCircle.position, {
        toValue: height,
        duration: 3000 + Math.random() * 4000,
        useNativeDriver: false,
      });

      Animated.timing(newCircle.opacity, {
        toValue: 1,    // Fully opaque
        duration: 700, // 0.5 second fade-in
        useNativeDriver: false,
    }).start();

      animation.start();

      const collisionInterval = setInterval(() => {
        const collectorX = positionRef.current._value;
        const circleBottom = newCircle.position._value + circleSize;
        const circleLeft = newCircle.start;
        const circleRight = circleLeft + circleSize;
        const collectorTop = height - collectorHeight - 20;

        if (circleBottom >= collectorTop && 
            circleLeft <= collectorX + collectorWidth && 
            circleRight >= collectorX) {
          if (newCircle.isBad) {
            setScore(prev => prev - 1);
          } else {
            setScore(prev => prev + 1);
          }
          // animation.stop();
          clearInterval(collisionInterval);
          setCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
        }

        if (circleBottom >= height) {
          // animation.stop();
          clearInterval(collisionInterval);
          setCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
        }
      }, 50);

      setCircles(prev => [...prev, newCircle]);
      return () => {
        clearInterval(collisionInterval);
      };
    }, 1000);

    return () => {
      clearInterval(generateCircles);
      clearInterval(gameTimer);
      gameIsActive.current = false;
    }
  }, []);

  return (
    <ImageBackground
        source={CityImage} 
        style={{ width, height, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
      {(countdown || endCountdown) && (
            <Text style={{ position: 'absolute', top: 10, right: 10, fontSize: 24, color: 'red' }}>
              00:{(endCountdown || countdown) < 10 ? `0${endCountdown || countdown}` : endCountdown || countdown}
            </Text>
        )}
      <Text style={{ fontSize: 24 * width / BASE_WIDTH, alignSelf: 'center' }}>Score: {score}</Text>

        {circles.map(circle => (
            <Animated.View 
                key={circle.id}
                style={{
                    opacity: circle.opacity,
                    height: circleSize,
                    width: circleSize,
                    position: 'absolute',
                    top: circle.position,
                    left: circle.start
                }}
            >
                <Image source={circle.image} style={[{ width: '100%', height: '100%', borderRadius: circleSize / 2, resizeMode: 'cover' },
                circle.isBad ? styles.glowEffect : {}
                ]} />
            </Animated.View>
        ))}
        <Animated.View 
            style={[
                { 
                    left: positionRef.current,
                    height: collectorHeight, 
                    width: collectorWidth, 
                    position: 'absolute', 
                    bottom: 40
                }
            ]} 
            {...panResponder.panHandlers}
        >
            <Image source={YugoImage} style={{ width: '100%', height: '200%' }} />
        </Animated.View>

    </ImageBackground>
  );
};

export default FuelGame;

const styles = StyleSheet.create({
    glowEffect: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderWidth: 2,
        borderColor: 'red',
    },
    // ... other styles ...
});