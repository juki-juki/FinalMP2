import React from 'react';
import OppositeAttactImage from "../games/gameimg/oppositesattract300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const OppositeAttact = () => {
  return (
    <GamePreview
      imageUrl={OppositeAttactImage}
      gameUrl="https://cdn.htmlgames.com/OppositesAttract/"
    />
  );
};

export default OppositeAttact;