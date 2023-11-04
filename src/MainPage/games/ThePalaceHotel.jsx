import React from 'react';
import ThePalaceHotelImage from "../games/gameimg/thepalacehotel300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ThePalaceHotel = () => {
  return (
    <GamePreview
      imageUrl={ThePalaceHotelImage}
      gameUrl="https://cdn.htmlgames.com/ThePalaceHotel/"
    />
  );
};

export default ThePalaceHotel;