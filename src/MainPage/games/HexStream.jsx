import React from 'react';
import HexStreamImage from "../games/gameimg/hexstream300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HexStream = () => {
  return (
    <GamePreview
      imageUrl={HexStreamImage}
      gameUrl="https://cdn.htmlgames.com/HexStream/"
    />
  );
};

export default HexStream;