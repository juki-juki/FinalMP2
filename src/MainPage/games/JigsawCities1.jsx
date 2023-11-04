import React from 'react';
import JigsawCities1Image from "../games/gameimg/jigsawcities1300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JigsawCities1 = () => {
  return (
    <GamePreview
      imageUrl={JigsawCities1Image}
      gameUrl="https://cdn.htmlgames.com/JigsawCities1/"
    />
  );
};

export default JigsawCities1;