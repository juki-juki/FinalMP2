import React from 'react';
import OfficeHOImage from "../games/gameimg/officehiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const OfficeHO = () => {
  return (
    <GamePreview
      imageUrl={OfficeHOImage}
      gameUrl="https://cdn.htmlgames.com/OfficeHiddenObjects/"
    />
  );
};

export default OfficeHO;