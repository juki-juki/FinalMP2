import React from 'react';
import NeonFenceImage from "../games/gameimg/neonfence300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const NeonFence = () => {
  return (
    <GamePreview
      imageUrl={NeonFenceImage}
      gameUrl="https://cdn.htmlgames.com/NeonFence/"
    />
  );
};

export default NeonFence;