import React from 'react';
import PinBallImage from "../games/gameimg/pinball300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PinBall = () => {
  return (
    <GamePreview
      imageUrl={PinBallImage}
      gameUrl="https://cdn.htmlgames.com/Pinball/"
    />
  );
};

export default PinBall;