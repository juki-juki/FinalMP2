import React from 'react';
import JollyJongMathImage from "../games/gameimg/jollyjongmath300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JollyJongMath = () => {
  return (
    <GamePreview
      imageUrl={JollyJongMathImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongMath/"
    />
  );
};

export default JollyJongMath;