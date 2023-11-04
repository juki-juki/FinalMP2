import React from 'react';
import TripleConImage from "../games/gameimg/tripleconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TripleCon = () => {
  return (
    <GamePreview
      imageUrl={TripleConImage}
      gameUrl="https://cdn.htmlgames.com/TripleConnect/"
    />
  );
};

export default TripleCon;