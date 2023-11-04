import React from 'react';
import BlobsImage from "../games/gameimg/blobs300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Blobs = () => {
  return (
    <GamePreview
      imageUrl={BlobsImage}
      gameUrl="https://cdn.htmlgames.com/Blobs/"
    />
  );
};

export default Blobs;