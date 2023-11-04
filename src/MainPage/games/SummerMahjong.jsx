import React from 'react';
import SummerMahjongImage from "../games/gameimg/summermahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SummerMahjong = () => {
  return (
    <GamePreview
      imageUrl={SummerMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SummerMahjong/"
    />
  );
};

export default SummerMahjong;