import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, PanResponder, Text } from 'react-native';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

const FuelGame = ({ width, height }) => {
  const [score, setScore] = useState(0);
  const [circles, setCircles] = useState([]);

  const collectorWidth = 100 * width / BASE_WIDTH;
  const collectorHeight = 50 * height / BASE_HEIGHT;
  const circleSize = 50 * width / BASE_WIDTH;

  const positionRef = useRef(new Animated.Value(width / 2 - collectorWidth / 2));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const newX = gesture.moveX - collectorWidth / 2;
      positionRef.current.setValue(newX);
    }
  });

  useEffect(() => {
    const generateCircles = setInterval(() => {
      const newCircle = {
        id: Math.random().toString(),
        position: new Animated.Value(-circleSize),
        start: Math.random() * (width - circleSize),
        isBad: Math.random() > 0.5
      };

      const animation = Animated.timing(newCircle.position, {
        toValue: height,
        duration: 3000 + Math.random() * 4000,
        useNativeDriver: false,
      });

      animation.start();

      const collisionInterval = setInterval(() => {
        const collectorX = positionRef.current._value;
        const circleBottom = newCircle.position._value + circleSize;
        const circleLeft = newCircle.start;
        const circleRight = circleLeft + circleSize;
        const collectorTop = height - collectorHeight;

        if (circleBottom >= collectorTop && 
            circleLeft <= collectorX + collectorWidth && 
            circleRight >= collectorX) {
          if (newCircle.isBad) {
            setScore(prev => prev - 1);
          } else {
            setScore(prev => prev + 1);
          }
          animation.stop();
          clearInterval(collisionInterval);
          setCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
        }

        if (circleBottom >= height) {
          animation.stop();
          clearInterval(collisionInterval);
          setCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
        }
      }, 50);

      setCircles(prev => [...prev, newCircle]);
      return () => {
        clearInterval(collisionInterval);
      };
    }, 1000);

    return () => clearInterval(generateCircles);
  }, []);

  return (
    <View style={{ width, height, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 * width / BASE_WIDTH, alignSelf: 'center' }}>Score: {score}</Text>

      {circles.map(circle => (
        <Animated.View 
          key={circle.id}
          style={{
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize / 2,
            backgroundColor: circle.isBad ? 'red' : 'green',
            position: 'absolute',
            top: circle.position,
            left: circle.start
          }}
        />
      ))}

      <Animated.View 
        style={[
          { 
            left: positionRef.current,
            height: collectorHeight, 
            width: collectorWidth, 
            backgroundColor: 'blue', 
            position: 'absolute', 
            bottom: 0
          }
        ]} 
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default FuelGame;
