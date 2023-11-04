import React from 'react';
import CruiseShipsHOImage from "../games/gameimg/cruiseshiphiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CruiseShipsHO = () => {
  return (
    <GamePreview
      imageUrl={CruiseShipsHOImage}
      gameUrl="https://cdn.htmlgames.com/CruiseShipHiddenObjects/"
    />
  );
};

export default CruiseShipsHO;