import React from 'react';
import DailyAnagramCrosswordsImage from "../games/gameimg/daily-anagram-crossword-300x200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyAnagramCrosswords = () => {
  return (
    <GamePreview
      imageUrl={DailyAnagramCrosswordsImage}
      gameUrl="https://cdn.htmlgames.com/DailyAnagramCrossword/"
    />
  );
};

export default DailyAnagramCrosswords;