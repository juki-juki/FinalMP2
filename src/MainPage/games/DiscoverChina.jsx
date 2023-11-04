import React from 'react';
import DiscoverChinaImage from "../games/gameimg/discoverchina300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DiscoverChina = () => {
  return (
    <GamePreview
      imageUrl={DiscoverChinaImage}
      gameUrl="https://cdn.htmlgames.com/DiscoverChina/"
    />
  );
};

export default DiscoverChina;