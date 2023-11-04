import React from 'react';
import DiscoverPetraImage from "../games/gameimg/discoverpetra300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DiscoverPetra = () => {
  return (
    <GamePreview
      imageUrl={DiscoverPetraImage}
      gameUrl="https://cdn.htmlgames.com/DiscoverPetra/"
    />
  );
};

export default DiscoverPetra;