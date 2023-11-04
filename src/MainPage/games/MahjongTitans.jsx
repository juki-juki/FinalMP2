import React from 'react';
import MahjongtitansImage from "../games/gameimg/mahjongg-titans-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Mahjongtitans = () => {
  return (
    <GamePreview
      imageUrl={MahjongtitansImage}
      gameUrl="https://cdn.htmlgames.com/MahjongTitans/"
    />
  );
};

export default Mahjongtitans;