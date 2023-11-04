import React from 'react';
import ChocolateFactoryImage from "../games/gameimg/chocolatefactory300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ChocolateFactory = () => {
  return (
    <GamePreview
      imageUrl={ChocolateFactoryImage}
      gameUrl="https://cdn.htmlgames.com/ChocolateFactory/"
    />
  );
};

export default ChocolateFactory;