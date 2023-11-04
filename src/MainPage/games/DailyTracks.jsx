import React from 'react';
import DailyTracksImage from "../games/gameimg/dailytracks300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyTracks = () => {
  return (
    <GamePreview
      imageUrl={DailyTracksImage}
      gameUrl="https://cdn.htmlgames.com/DailyTracks/"
    />
  );
};

export default DailyTracks;