import React from 'react';
import ZoobiesConImage from "../games/gameimg/zoobiesconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ZoobiesCon = () => {
  return (
    <GamePreview
      imageUrl={ZoobiesConImage}
      gameUrl="https://cdn.htmlgames.com/ZoobiesConnect/"
    />
  );
};

export default ZoobiesCon;