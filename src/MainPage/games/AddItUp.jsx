import React from 'react';
import AddItUpImage from "../games/gameimg/additup-300x200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AddItUp = () => {
  return (
    <GamePreview
      imageUrl={AddItUpImage}
      gameUrl="https://cdn.htmlgames.com/AddItUp/"
    />
  );
};

export default AddItUp;