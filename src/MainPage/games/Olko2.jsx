import React from 'react';
import Olko2Image from "../games/gameimg/olko2300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Olko2 = () => {
  return (
    <GamePreview
      imageUrl={Olko2Image}
      gameUrl="https://cdn.htmlgames.com/Olko2/"
    />
  );
};

export default Olko2;