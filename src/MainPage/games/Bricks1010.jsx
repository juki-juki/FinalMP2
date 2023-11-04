import React from 'react';
import Bricks1010Image from "../games/gameimg/1010bricks300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Bricks1010 = () => {
  return (
    <GamePreview
      imageUrl={Bricks1010Image}
      gameUrl="https://cdn.htmlgames.com/1010Bricks/"
    />
  );
};

export default Bricks1010;