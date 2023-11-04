import React from 'react';
import PetLinkImage from "../games/gameimg/petlink300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PetLink = () => {
  return (
    <GamePreview
      imageUrl={PetLinkImage}
      gameUrl="https://cdn.htmlgames.com/PetLink/"
    />
  );
};

export default PetLink;