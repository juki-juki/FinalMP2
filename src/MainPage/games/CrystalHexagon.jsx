import React from 'react';
import CrystalHexagonImage from "../games/gameimg/crystalhexajong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CrystalHexagon = () => {
  return (
    <GamePreview
      imageUrl={CrystalHexagonImage}
      gameUrl="https://cdn.htmlgames.com/CrystalHexajong/"
    />
  );
};

export default CrystalHexagon;