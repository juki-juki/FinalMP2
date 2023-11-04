import React from 'react';
import CrossWordsImage from "../games/gameimg/crosswords2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CrossWords2 = () => {
  return (
    <GamePreview
      imageUrl={CrossWordsImage}
      gameUrl="https://cdn.htmlgames.com/Crosswords2/"
    />
  );
};

export default CrossWords2;