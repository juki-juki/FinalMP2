import React from 'react';
import FlowerShopImage from "../games/gameimg/flowershop300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FlowerShop = () => {
  return (
    <GamePreview
      imageUrl={FlowerShopImage}
      gameUrl="https://cdn.htmlgames.com/FlowerShop/"
    />
  );
};

export default FlowerShop;