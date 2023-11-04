import React from 'react';
import CatHexjongImage from "../games/gameimg/hexjongcats300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CatHexjong = () => {
  return (
    <GamePreview
      imageUrl={CatHexjongImage}
      gameUrl="https://cdn.htmlgames.com/HexJongCats/"
    />
  );
};

export default CatHexjong;