import React from 'react';
import KaodokuImage from "../games/gameimg/dailykaodoku300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Kaodoku = () => {
  return (
    <GamePreview
      imageUrl={KaodokuImage}
      gameUrl="https://cdn.htmlgames.com/DailyKaodoku/"
    />
  );
};

export default Kaodoku;