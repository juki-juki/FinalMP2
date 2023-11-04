import React from 'react';
import JollyJongBlitzImage from "../games/gameimg/jollyjongblitz300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JollyJongBlitz = () => {
  return (
    <GamePreview
      imageUrl={JollyJongBlitzImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongBlitz/"
    />
  );
};

export default JollyJongBlitz;