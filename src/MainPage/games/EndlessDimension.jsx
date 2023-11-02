import React from 'react';
import EndlessDimensionImage from '../../assets/endless-dimensions-300.webp'; // 
import GamePreview from './gamePreview';

const EndlessDimension = () => {
  return (
    <GamePreview
      name="EndlessDimension"
      imageUrl={EndlessDimensionImage}
      gameUrl="https://cdn.htmlgames.com/EndlessDimensions/"
    />
  );
};

export default EndlessDimension;
