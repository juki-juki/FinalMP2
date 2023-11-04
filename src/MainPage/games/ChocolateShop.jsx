import React from 'react';
import ChocolateShopImage from "../games/gameimg/chocolateshop300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ChocolateShop = () => {
  return (
    <GamePreview
      imageUrl={ChocolateShopImage}
      gameUrl="https://cdn.htmlgames.com/ChocolateShop/"
    />
  );
};

export default ChocolateShop;