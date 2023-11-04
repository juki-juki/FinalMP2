import React from 'react';
import NeonJong3dImage from "../games/gameimg/neonjong3d300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const NeonJong3d = () => {
  return (
    <GamePreview
      imageUrl={NeonJong3dImage}
      gameUrl="https://cdn.htmlgames.com/NeonJong3D/"
    />
  );
};

export default NeonJong3d;