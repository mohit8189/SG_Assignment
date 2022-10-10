import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {CARD_PAIRS_VALUE} from '../../../utils/constants';
import CardView from '../view';

const CardGame = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const cards = Array.from({length: CARD_PAIRS_VALUE}, (_, i) => i + 1).flatMap(i => [i, i]);

  const [steps, setSteps] = useState(0);

  useEffect(() => {
    if (gameOver) {
      Alert.alert('Congratulations!', `You win this game by ${steps} steps.`, [
        {text: 'Try another round', onPress: () => restartGame()},
      ]);
    }
  }, [gameOver]);

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const [cardList, setCardList] = useState(
    shuffle(cards).map((name, index) => {
      return {
        id: index,
        name: name,
        flipped: false,
        matched: false,
      };
    }));

  const handleClick = (name, index) => {
    let currentCard = {
      name,
      index,
    };

    let updateCards = cardList.map(card => {
      if (card.id === index) {
        card.flipped = true;
        setSteps(prevSteps => prevSteps + 1);
      }
      return card;
    });
    let updateFlipped = flippedCards;
    updateFlipped.push(currentCard);
    setFlippedCards(updateFlipped);
    setCardList(updateCards);

    if (flippedCards.length === 2) {
      setTimeout(() => {
        check();
      }, 1000);
    }
  };

  const check = () => {
    let updateCards = cardList;
    if (
      flippedCards[0].name === flippedCards[1].name &&
      flippedCards[0].index !== flippedCards[1].index
    ) {
      updateCards[flippedCards[0].index].matched = true;
      updateCards[flippedCards[1].index].matched = true;
      isGameOver();
    } else {
      updateCards[flippedCards[0].index].flipped = false;
      updateCards[flippedCards[1].index].flipped = false;
    }
    setCardList(updateCards);
    setFlippedCards([]);
  };

  const isGameOver = () => {
    let done = true;
    cardList.forEach(card => {
      if (!card.matched) done = false;
    });
    setGameOver(done);
  };

  const restartGame = () => {
    setCardList(
      shuffle(cards).map((name, index) => {
        return {
          id: index,
          name: name,
          flipped: false,
          matched: false,
        };
      }));

    setSteps(0);
    setFlippedCards([]);
    setGameOver(false);
  };

  return (
    <CardView
      restartGame={restartGame}
      flippedCards={flippedCards}
      cardList={cardList}
      handleClick={handleClick}
      steps={steps}
    />
  );
};

export default CardGame;
