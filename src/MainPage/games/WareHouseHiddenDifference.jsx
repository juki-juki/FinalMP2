import React from 'react';
import WareHouseHiddenDifferenceImage from "../games/gameimg/warehousehiddendifferences300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const WareHouseHiddenDifference = () => {
  return (
    <GamePreview
      imageUrl={WareHouseHiddenDifferenceImage}
      gameUrl="https://cdn.htmlgames.com/WarehouseHiddenDifferences/"
    />
  );
};

export default WareHouseHiddenDifference;