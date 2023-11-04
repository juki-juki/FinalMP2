import React from 'react';
import TensImage from "../games/gameimg/tens300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Tens = () => {
  return (
    <GamePreview
      imageUrl={TensImage}
      gameUrl="https://cdn.htmlgames.com/Tens/"
    />
  );
};

export default Tens;