import React from 'react';
import AnimalCon3Image from "../games/gameimg/ancientmahjong300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AnimalCon3 = () => {
  return (
    <GamePreview
      imageUrl={AnimalCon3Image}
      gameUrl="https://cdn.htmlgames.com/AnimalsConnect3/"
    />
  );
};

export default AnimalCon3;