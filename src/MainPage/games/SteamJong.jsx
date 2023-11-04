import React from 'react';
import SteamJongImage from "../games/gameimg/steamjong-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SteamJong = () => {
  return (
    <GamePreview
      imageUrl={SteamJongImage}
      gameUrl="https://cdn.htmlgames.com/SteamJong/"
    />
  );
};

export default SteamJong;