import React from 'react';
import City2048Image from "../games/gameimg/2048city300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const City2048 = () => {
  return (
    <GamePreview
      imageUrl={City2048Image}
      gameUrl="https://cdn.htmlgames.com/2048City/"
    />
  );
};

export default City2048;