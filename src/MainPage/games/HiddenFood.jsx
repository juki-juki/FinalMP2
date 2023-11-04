import React from 'react';
import HiddenFoodImage from "../games/gameimg/hiddenfood300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenFood = () => {
  return (
    <GamePreview
      imageUrl={HiddenFoodImage}
      gameUrl="https://cdn.htmlgames.com/HiddenFood/"
    />
  );
};

export default HiddenFood;