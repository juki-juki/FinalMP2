import React from 'react';
import SnowBallImage from "../games/gameimg/snowballs300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SnowBall = () => {
  return (
    <GamePreview
      imageUrl={SnowBallImage}
      gameUrl="https://cdn.htmlgames.com/SnowBalls/"
    />
  );
};

export default SnowBall;