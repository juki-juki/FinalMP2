import React from 'react';
import ShinroImage from "../games/gameimg/shinro-300x200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Shinro = () => {
  return (
    <GamePreview
      imageUrl={ShinroImage}
      gameUrl="https://cdn.htmlgames.com/DailyShinro/"
    />
  );
};

export default Shinro;