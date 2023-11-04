import React from 'react';
import AlienInvaders2Image from "../games/gameimg/alieninvaders2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AlienInvaders2 = () => {
  return (
    <GamePreview
      imageUrl={AlienInvaders2Image}
      gameUrl="https://cdn.htmlgames.com/AlienInvaders2/"
    />
  );
};

export default AlienInvaders2;