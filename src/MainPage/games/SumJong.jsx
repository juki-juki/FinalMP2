import React from 'react';
import SumJongImage from "../games/gameimg/sumjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SumJong = () => {
  return (
    <GamePreview
      imageUrl={SumJongImage}
      gameUrl="https://cdn.htmlgames.com/Sumjong/"
    />
  );
};

export default SumJong;