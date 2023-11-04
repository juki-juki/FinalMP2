import React from 'react';
import AllThreesDominoImage from "../games/gameimg/allthreesdomino300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AllThreesDomino = () => {
  return (
    <GamePreview
      imageUrl={AllThreesDominoImage}
      gameUrl="https://cdn.htmlgames.com/AllThreesDomino/"
    />
  );
};

export default AllThreesDomino;