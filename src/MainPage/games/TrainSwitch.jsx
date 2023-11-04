import React from 'react';
import TrainSwitchImage from "../games/gameimg/trainswitch300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TrainSwitch = () => {
  return (
    <GamePreview
      imageUrl={TrainSwitchImage}
      gameUrl="https://cdn.htmlgames.com/TrainSwitch/"
    />
  );
};

export default TrainSwitch;