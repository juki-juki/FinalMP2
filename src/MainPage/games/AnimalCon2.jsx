import React from 'react';
import AnimalCon2Image from "../games/gameimg/animalsconnect2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AnimalCon2 = () => {
  return (
    <GamePreview
      imageUrl={AnimalCon2Image}
      gameUrl="https://cdn.htmlgames.com/AnimalsConnect2/"
    />
  );
};

export default AnimalCon2;