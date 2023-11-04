import React from 'react';
import MouseandCheeseImage from "../games/gameimg/mouseandcheese300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MouseandCheese = () => {
  return (
    <GamePreview
      imageUrl={MouseandCheeseImage}
      gameUrl="https://cdn.htmlgames.com/MouseAndCheese/"
    />
  );
};

export default MouseandCheese;