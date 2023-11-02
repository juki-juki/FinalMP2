import React from 'react';
import FruitBubbleImage from '../../assets/fruitbubble300200.webp';
import GamePreview from './gamePreview';

const FruitBubble = () => {
  return (
    <GamePreview
      name="Fruit Bubble"
      imageUrl={FruitBubbleImage}
      gameUrl="https://cdn.htmlgames.com/FruitBubble/"
    />
  );
};

export default FruitBubble;
