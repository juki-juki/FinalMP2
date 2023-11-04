import React from 'react';
import RuneMahjongImage from "../games/gameimg/runemahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const RuneMahjong = () => {
  return (
    <GamePreview
      imageUrl={RuneMahjongImage}
      gameUrl="https://cdn.htmlgames.com/RuneMahjongg/"
    />
  );
};

export default RuneMahjong;