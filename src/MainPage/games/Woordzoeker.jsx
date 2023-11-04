import React from 'react';
import WoordzoekerImage from "../games/gameimg/dagelijksewoordzoeker300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Woordzoeker = () => {
  return (
    <GamePreview
      imageUrl={WoordzoekerImage}
      gameUrl="https://cdn.htmlgames.com/DagelijkseWoordzoeker/"
    />
  );
};

export default Woordzoeker;