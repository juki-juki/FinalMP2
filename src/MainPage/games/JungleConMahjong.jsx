import React from 'react';
import JungleConMahjongImage from "../games/gameimg/mahjongconnectjungle300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JungleConMahjong = () => {
  return (
    <GamePreview
      imageUrl={JungleConMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MahjongConnectJungle/"
    />
  );
};

export default JungleConMahjong;