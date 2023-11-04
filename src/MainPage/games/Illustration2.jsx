import React from 'react';
import Illustration2Image from "../games/gameimg/illustrations2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Illustration2 = () => {
  return (
    <GamePreview
      imageUrl={Illustration2Image}
      gameUrl="https://cdn.htmlgames.com/Illustrations2/"
    />
  );
};

export default Illustration2;