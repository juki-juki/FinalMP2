import React from 'react';
import SearchtheSandsImage from "../games/gameimg/searchthesands300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SearchtheSands = () => {
  return (
    <GamePreview
      imageUrl={SearchtheSandsImage}
      gameUrl="https://cdn.htmlgames.com/SearchTheSands/"
    />
  );
};

export default SearchtheSands;