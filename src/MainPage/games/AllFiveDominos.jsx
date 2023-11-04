import React from 'react';
import AllFiveDominosImage from "../games/gameimg/allfivesdomino300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AllFiveDominos = () => {
  return (
    <GamePreview
      imageUrl={AllFiveDominosImage}
      gameUrl="https://cdn.htmlgames.com/AllFivesDomino/"
    />
  );
};

export default AllFiveDominos;