import React from 'react';
import DiscoverEgyptImage from "../games/gameimg/discoveregypt300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DiscoverEgypt = () => {
  return (
    <GamePreview
      imageUrl={DiscoverEgyptImage}
      gameUrl="https://cdn.htmlgames.com/DiscoverEgypt/"
    />
  );
};

export default DiscoverEgypt;