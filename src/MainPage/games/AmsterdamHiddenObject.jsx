import React from 'react';
import AmsterdamHiddenObjectImage from "../games/gameimg/amsterdamhiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AmsterdamHiddenObject = () => {
  return (
    <GamePreview
      imageUrl={AmsterdamHiddenObjectImage}
      gameUrl="https://cdn.htmlgames.com/AmsterdamHiddenObjects/"
    />
  );
};

export default AmsterdamHiddenObject;