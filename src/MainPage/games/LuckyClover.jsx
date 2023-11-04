import React from 'react';
import LuckyCloverImage from "../games/gameimg/luckyclover300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const LuckyClover = () => {
  return (
    <GamePreview
      imageUrl={LuckyCloverImage}
      gameUrl="https://cdn.htmlgames.com/LuckyClover/"
    />
  );
};

export default LuckyClover;