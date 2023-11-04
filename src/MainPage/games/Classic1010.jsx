import React from 'react';
import Classic1010Image from "../games/gameimg/1010classic300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Classic1010 = () => {
  return (
    <GamePreview
      imageUrl={Classic1010Image}
      gameUrl="https://cdn.htmlgames.com/1010Classic/"
    />
  );
};

export default Classic1010;