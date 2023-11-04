import React from 'react';
import PraqueHiddenObjectImage from "../games/gameimg/praquehiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PraqueHiddenObject = () => {
  return (
    <GamePreview
      imageUrl={PraqueHiddenObjectImage}
      gameUrl="https://cdn.htmlgames.com/PragueHiddenObjects/"
    />
  );
};

export default PraqueHiddenObject;