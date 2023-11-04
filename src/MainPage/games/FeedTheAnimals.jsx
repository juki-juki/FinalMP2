import React from 'react';
import FeedTheAnimalsImage from "../games/gameimg/feedtheanimals300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FeedTheAnimals = () => {
  return (
    <GamePreview
      imageUrl={FeedTheAnimalsImage}
      gameUrl="https://cdn.htmlgames.com/FeedTheAnimals/"
    />
  );
};

export default FeedTheAnimals;