import React from 'react';
import MajongImage from "../games/gameimg/majong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Majong = () => {
  return (
    <GamePreview
      imageUrl={MajongImage}
      gameUrl="https://cdn.htmlgames.com/Majong/"
    />
  );
};

export default Majong;