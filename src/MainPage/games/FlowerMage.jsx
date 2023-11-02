import React from 'react';
import FlowerMageImage from '../../assets/flowermerge300200.webp'; // 
import GamePreview from './gamePreview';

const FlowerMage = () => {
  return (
    <GamePreview
      name="Flower Mage"
      imageUrl={FlowerMageImage}
      gameUrl="https://cdn.htmlgames.com/FlowerMerge/"
    />
  );
};

export default FlowerMage;
