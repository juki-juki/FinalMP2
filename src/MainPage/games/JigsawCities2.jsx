import React from 'react';
import JigsawCities2Image from "../games/gameimg/jigsawcities2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JigsawCities2 = () => {
  return (
    <GamePreview
      imageUrl={JigsawCities2Image}
      gameUrl="https://cdn.htmlgames.com/JigsawCities2/"
    />
  );
};

export default JigsawCities2;