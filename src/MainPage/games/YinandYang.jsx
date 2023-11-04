import React from 'react';
import YinandYangImage from "../games/gameimg/yinandyang300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const YinandYang = () => {
  return (
    <GamePreview
      imageUrl={YinandYangImage}
      gameUrl="https://cdn.htmlgames.com/YinAndYang/"
    />
  );
};

export default YinandYang;