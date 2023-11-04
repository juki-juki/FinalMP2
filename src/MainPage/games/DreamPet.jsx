import React from 'react';
import DreamPetImage from "../games/gameimg/dream-pet-dimensions-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DreamPet = () => {
  return (
    <GamePreview
      imageUrl={DreamPetImage}
      gameUrl="https://cdn.htmlgames.com/DreamPetDimensions/"
    />
  );
};

export default DreamPet;