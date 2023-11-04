import React from 'react';
import SlidonMahjongSlideImage from "../games/gameimg/slidon300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SlidonMahjongSlide = () => {
  return (
    <GamePreview
      imageUrl={SlidonMahjongSlideImage}
      gameUrl="https://cdn.htmlgames.com/Slidon/"
    />
  );
};

export default SlidonMahjongSlide;