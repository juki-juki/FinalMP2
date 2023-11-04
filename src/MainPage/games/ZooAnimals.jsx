import React from 'react';
import ZooAnimalsImage from "../games/gameimg/zooanimals300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ZooAnimals = () => {
  return (
    <GamePreview
      imageUrl={ZooAnimalsImage}
      gameUrl="https://cdn.htmlgames.com/ZooAnimals/"
    />
  );
};

export default ZooAnimals;