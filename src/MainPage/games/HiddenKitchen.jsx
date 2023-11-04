import React from 'react';
import HiddenKitchenImage from "../games/gameimg/hiddenkitchen300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenKitchen = () => {
  return (
    <GamePreview
      imageUrl={HiddenKitchenImage}
      gameUrl="https://cdn.htmlgames.com/HiddenKitchen/"
    />
  );
};

export default HiddenKitchen;