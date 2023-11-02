import React from 'react';
import BlockDominoImage from '../../assets/blockdomino300200.webp'; // Include the appropriate file extension
import GamePreview from './gamePreview'; // Make sure the component filename matches

const GamesExample = () => {
  return (
    <GamePreview
      name="Block Domino"
      imageUrl={BlockDominoImage}
      gameUrl="https://html5.gamedistribution.com/c23c547669904e348202fbba7f5f8306/?gd_sdk_referrer_url=https://gamedistribution.com/games/for-honor-warriors-io"
    />
  );
};

export default GamesExample;
