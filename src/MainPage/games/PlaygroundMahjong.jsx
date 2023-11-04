import React from 'react';
import PlaygroundMahjongImage from "../games/gameimg/playgroundmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PlaygroundMahjong = () => {
  return (
    <GamePreview
      imageUrl={PlaygroundMahjongImage}
      gameUrl="https://cdn.htmlgames.com/PlaygroundMahjong/"
    />
  );
};

export default PlaygroundMahjong;