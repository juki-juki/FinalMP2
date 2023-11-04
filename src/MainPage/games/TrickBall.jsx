import React from 'react';
import TrickBallImage from "../games/gameimg/trickball300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TrickBall = () => {
  return (
    <GamePreview
      imageUrl={TrickBallImage}
      gameUrl="https://cdn.htmlgames.com/TrickBall/"
    />
  );
};

export default TrickBall;