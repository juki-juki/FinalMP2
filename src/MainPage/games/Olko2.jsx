import React from 'react';
import GamePreview from '../MainComponent/gamePreview'; // Ensure the component filename matches
import Olko2Image from '../games/gameimg/olko2300200.webp'; // Include the appropriate file extension

const Olko2 = () => {
  return (
    <GamePreview
      name="Olko 2"
      imageUrl={Olko2Image}
      gameUrl="https://cdn.htmlgames.com/Olko2/" // Replace with the actual URL of Olko 2
    />
  );
};

export default Olko2;
