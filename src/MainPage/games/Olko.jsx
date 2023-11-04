import React from 'react';
import OlkoImage from "../games/gameimg/olko300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Olko = () => {
  return (
    <GamePreview
      imageUrl={OlkoImage}
      gameUrl="https://cdn.htmlgames.com/Olko/"
    />
  );
};

export default Olko;