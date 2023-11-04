import React from 'react';
import FindtheKeyImage from "../games/gameimg/findthekeys300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FindtheKey = () => {
  return (
    <GamePreview
      imageUrl={FindtheKeyImage}
      gameUrl="https://cdn.htmlgames.com/FindTheKeys/"
    />
  );
};

export default FindtheKey;