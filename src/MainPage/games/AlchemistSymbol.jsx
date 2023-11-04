import React from 'react';
import AlchemistSymbolImage from "../games/gameimg/alchemistsymbols300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AlchemistSymbol = () => {
  return (
    <GamePreview
      imageUrl={AlchemistSymbolImage}
      gameUrl="https://cdn.htmlgames.com/AlchemistSymbols/"
    />
  );
};

export default AlchemistSymbol;