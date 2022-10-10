import React, {useRef} from 'react';
import {Animated} from 'react-native';
import BoardView from '../view';

const Card = ({id, name, flipped, clicked}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontAnimatedStyle = () => {
    const frontInterpolate = animatedValue.interpolate({
      inputRange: [90, 180],
      outputRange: ['90deg', '180deg'],
      useNativeDriver: false,
    });
    return {transform: [{rotateY: frontInterpolate}]};
  };

  const backAnimatedStyle = () => {
    const backInterpolate = animatedValue.interpolate({
      inputRange: [0, 90],
      outputRange: ['0deg', '90deg'],
      useNativeDriver: false,
    });
    return {transform: [{rotateY: backInterpolate}]};
  };

  const flipCard = (name, id) => {
    clicked(name, id);
    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const restore = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const flipBack = () => {
    if (flipped === undefined) {
      return null;
    } else if (flipped) {
      return backAnimatedStyle();
    } else {
      restore();
      return backAnimatedStyle();
    }
  };

  const flipFront = () => {
    if (flipped === undefined) {
      return null;
    } else if (flipped) {
      return frontAnimatedStyle();
    } else {
      restore();
      return frontAnimatedStyle();
    }
  };

  return (
    <BoardView
      flipped={flipped}
      flipBack={flipBack}
      flipFront={flipFront}
      id={id}
      name={name}
      flipCard={flipCard}
    />
  );
};
export default Card;
