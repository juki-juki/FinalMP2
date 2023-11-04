import React from 'react';
import OutSpaceArkanoicImage from "../games/gameimg/outerspacearkanoic300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const OutSpaceArkanoic = () => {
  return (
    <GamePreview
      imageUrl={OutSpaceArkanoicImage}
      gameUrl="https://cdn.htmlgames.com/OuterSpaceArkanoid/"
    />
  );
};

export default OutSpaceArkanoic;