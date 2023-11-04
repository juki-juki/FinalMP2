import React from 'react';
import DiscPoolPlayer1Image from "../games/gameimg/discpool1player300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DiscPoolPlayer1 = () => {
  return (
    <GamePreview
      imageUrl={DiscPoolPlayer1Image}
      gameUrl="https://cdn.htmlgames.com/DiscPool1Player/"
    />
  );
};

export default DiscPoolPlayer1;