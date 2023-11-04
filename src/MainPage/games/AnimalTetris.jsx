import React from 'react';
import AnimalTetrisImage from "../games/gameimg/animaltetris300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AnimalTetris = () => {
  return (
    <GamePreview
      imageUrl={AnimalTetrisImage}
      gameUrl="https://cdn.htmlgames.com/AnimalTetris/"
    />
  );
};

export default AnimalTetris;