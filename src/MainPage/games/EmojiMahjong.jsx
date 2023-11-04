import React from 'react';
import EmojiMahjongImage from "../games/gameimg/emojimahjong300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const EmojiMahjong = () => {
  return (
    <GamePreview
      imageUrl={EmojiMahjongImage}
      gameUrl="https://cdn.htmlgames.com/EmojiMahjong/"
    />
  );
};

export default EmojiMahjong;