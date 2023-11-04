import React from 'react';
import NeonHexImage from "../games/gameimg/neonhex300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const NeonHex = () => {
  return (
    <GamePreview
      imageUrl={NeonHexImage}
      gameUrl="https://cdn.htmlgames.com/NeonHex/"
    />
  );
};

export default NeonHex;