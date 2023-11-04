import React from 'react';
import JollyJongBirdsImage from "../games/gameimg/jollyjongbirds300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JollyJongBirds = () => {
  return (
    <GamePreview
      imageUrl={JollyJongBirdsImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongBirds/"
    />
  );
};

export default JollyJongBirds;