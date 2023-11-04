import React from 'react';
import RailWayMysteriesImage from "../games/gameimg/railwaymysteries300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const RailWayMysteries = () => {
  return (
    <GamePreview
      imageUrl={RailWayMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/RailwayMysteries/"
    />
  );
};

export default RailWayMysteries;