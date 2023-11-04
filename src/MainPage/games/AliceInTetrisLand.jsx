import React from 'react';
import AliceInTetrisLandImage from "../games/gameimg/aliceIntetrisland300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AliceInTetrisLand = () => {
  return (
    <GamePreview
      imageUrl={AliceInTetrisLandImage}
      gameUrl="https://cdn.htmlgames.com/AliceInTetrisland/"
    />
  );
};

export default AliceInTetrisLand;