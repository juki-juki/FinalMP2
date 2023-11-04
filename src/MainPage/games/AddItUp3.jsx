import React from 'react';
import AddItUp3Image from "../games/gameimg/additup3300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AddItUp3 = () => {
  return (
    <GamePreview
      imageUrl={AddItUp3Image}
      gameUrl="https://cdn.htmlgames.com/AddItUp3/"
    />
  );
};

export default AddItUp3;