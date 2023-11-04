import React from 'react';
import RuinsHiddenStarsImage from "../games/gameimg/ruins-hidden-stars-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const RuinsHiddenStars = () => {
  return (
    <GamePreview
      imageUrl={RuinsHiddenStarsImage}
      gameUrl="https://cdn.htmlgames.com/RuinsHiddenStars/"
    />
  );
};

export default RuinsHiddenStars;