import React from 'react';
import ClassicPacImage from "../games/gameimg/classicpac300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClassicPac = () => {
  return (
    <GamePreview
      imageUrl={ClassicPacImage}
      gameUrl="https://cdn.htmlgames.com/ClassicPac/"
    />
  );
};

export default ClassicPac;