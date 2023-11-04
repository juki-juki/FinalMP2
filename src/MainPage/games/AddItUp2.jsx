import React from 'react';
import AddItUp2Image from "../games/gameimg/additup2-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AddItUp2 = () => {
  return (
    <GamePreview
      imageUrl={AddItUp2Image}
      gameUrl="https://cdn.htmlgames.com/AddItUp2/"
    />
  );
};

export default AddItUp2;