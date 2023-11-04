import React from 'react';
import MahjongCubesImage from "../games/gameimg/mahjongcubes300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongCubes = () => {
  return (
    <GamePreview
      imageUrl={MahjongCubesImage}
      gameUrl="https://cdn.htmlgames.com/MahjongCubes/"
    />
  );
};

export default MahjongCubes;