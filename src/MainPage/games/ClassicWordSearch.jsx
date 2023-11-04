
import React from 'react';
import ClassicWordSearchImage from "../games/gameimg/classic-word-search-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClassicWordSearch = () => {
  return (
    <GamePreview
      imageUrl={ClassicWordSearchImage}
      gameUrl="https://cdn.htmlgames.com/ClassicWordSearch/"
    />
  );
};

export default ClassicWordSearch;