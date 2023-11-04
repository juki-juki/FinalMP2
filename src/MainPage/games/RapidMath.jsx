import React from 'react';
import RapidMathImage from "../games/gameimg/rapidmath300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const RapidMath = () => {
  return (
    <GamePreview
      imageUrl={RapidMathImage}
      gameUrl="https://cdn.htmlgames.com/RapidMath/"
    />
  );
};

export default RapidMath;