import React from 'react';
import DeepSeaTrijongImage from "../games/gameimg/deepseatrijong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DeepSeaTrijong = () => {
  return (
    <GamePreview
      imageUrl={DeepSeaTrijongImage}
      gameUrl="https://cdn.htmlgames.com/DeepSeaTrijong/"
    />
  );
};

export default DeepSeaTrijong;