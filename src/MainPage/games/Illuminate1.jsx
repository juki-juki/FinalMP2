import React from 'react';
import Illuminate1Image from "../games/gameimg/illuminate1300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Illuminate1 = () => {
  return (
    <GamePreview
      imageUrl={Illuminate1Image}
      gameUrl="https://cdn.htmlgames.com/Illuminate1/"
    />
  );
};

export default Illuminate1;