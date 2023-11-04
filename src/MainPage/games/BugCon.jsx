import React from 'react';
import BugConImage from "../games/gameimg/bugconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BugCon = () => {
  return (
    <GamePreview
      imageUrl={BugConImage}
      gameUrl="https://cdn.htmlgames.com/BugConnect/"
    />
  );
};

export default BugCon;