import React from 'react';
import TowerTownImage from "../games/gameimg/towertown300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const TowerTown = () => {
  return (
    <GamePreview
      imageUrl={TowerTownImage}
      gameUrl="https://cdn.htmlgames.com/TowerTown/"
    />
  );
};

export default TowerTown;