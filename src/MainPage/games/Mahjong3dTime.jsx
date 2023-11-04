import React from 'react';
import Mahljong3dTimeImage from "../games/gameimg/mahjong3dtime300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Mahljong3dTime = () => {
  return (
    <GamePreview
      imageUrl={Mahljong3dTimeImage}
      gameUrl="https://cdn.htmlgames.com/Mahljong3DTime/"
    />
  );
};

export default Mahljong3dTime;