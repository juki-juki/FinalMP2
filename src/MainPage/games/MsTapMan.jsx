import React from 'react';
import MsTapManImage from "../games/gameimg/mstapman300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const MsTapMan = () => {
  return (
    <GamePreview
      imageUrl={MsTapManImage}
      gameUrl="https://cdn.htmlgames.com/MsTapman/"
    />
  );
};

export default MsTapMan;