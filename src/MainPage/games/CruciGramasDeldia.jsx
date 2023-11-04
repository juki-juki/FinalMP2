import React from 'react';
import CruciGramasDeldiaImage from "../games/gameimg/crucigramasdeldia300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CruciGramasDeldia = () => {
  return (
    <GamePreview
      imageUrl={CruciGramasDeldiaImage}
      gameUrl="https://cdn.htmlgames.com/CrucigramasDelDia/"
    />
  );
};

export default CruciGramasDeldia;