import React from 'react';
import HexConImage from "../games/gameimg/hexconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HexCon = () => {
  return (
    <GamePreview
      imageUrl={HexConImage}
      gameUrl="https://cdn.htmlgames.com/HexConnect/"
    />
  );
};

export default HexCon;