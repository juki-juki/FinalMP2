import React from 'react';
import AnimalsConnectImage from "../games/gameimg/animalsconnect300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AnimalsConnect = () => {
  return (
    <GamePreview
      imageUrl={AnimalsConnectImage}
      gameUrl="https://cdn.htmlgames.com/AnimalsConnect/"
    />
  );
};

export default AnimalsConnect;