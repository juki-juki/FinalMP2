import React from 'react';
import UpsideDownImage from "../games/gameimg/upsidedown300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const UpsideDown = () => {
  return (
    <GamePreview
      imageUrl={UpsideDownImage}
      gameUrl="https://cdn.htmlgames.com/UpsideDown/"
    />
  );
};

export default UpsideDown;