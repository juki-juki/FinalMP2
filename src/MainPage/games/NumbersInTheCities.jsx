import React from 'react';
import NumbersInTheCitiesImage from "../games/gameimg/numbersinthecity300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const NumbersInTheCities = () => {
  return (
    <GamePreview
      imageUrl={NumbersInTheCitiesImage}
      gameUrl="https://cdn.htmlgames.com/NumbersInTheCity/"
    />
  );
};

export default NumbersInTheCities;