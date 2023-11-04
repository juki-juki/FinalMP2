import React from 'react';
import BlacktoWhiteImage from "../games/gameimg/blacktowhite300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BlacktoWhite = () => {
  return (
    <GamePreview
      imageUrl={BlacktoWhiteImage}
      gameUrl="https://cdn.htmlgames.com/BlackToWhite/"
    />
  );
};

export default BlacktoWhite;