import React from 'react';
import DrackAndFrancImage from "../games/gameimg/Drac & Franc - 512x340.jpeg"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DrackAndFranc = () => {
  return (
    <GamePreview
    name="Drac & Franc"
    imageUrl={DrackAndFrancImage}
    gameUrl="https://html5.gamedistribution.com/bf8cb316159f400aaebe9672aaf8d7e8/?gd_sdk_referrer_url=https://gamedistribution.com/games/drac-and-franc"
    />
  );
};

export default DrackAndFranc;
