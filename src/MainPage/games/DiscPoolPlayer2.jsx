import React from 'react';
import DiscPoolPlayer2Image from "../games/gameimg/discpool2player300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DiscPoolPlayer2 = () => {
  return (
    <GamePreview
      imageUrl={DiscPoolPlayer2Image}
      gameUrl="https://cdn.htmlgames.com/DiscPool2Player/"
    />
  );
};

export default DiscPoolPlayer2;