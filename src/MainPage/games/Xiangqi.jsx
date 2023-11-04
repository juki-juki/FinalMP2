import React from 'react';
import XiangqiImage from "../games/gameimg/xiangqi300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const Xiangqi = () => {
  return (
    <GamePreview
      imageUrl={XiangqiImage}
      gameUrl="https://cdn.htmlgames.com/Xiangqi/"
    />
  );
};

export default Xiangqi;