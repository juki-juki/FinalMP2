import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import AirportSniper from '../games/AirportSniper';
import BlockDomino from '../games/BlockDomino';
import EndlessDimension from '../games/EndlessDimension';
import FlowerMage from '../games/FlowerMage';
import FruitBubble from '../games/FruitBubble';
import GalaxyShooter from '../games/GalaxyShooter';
import HuntingJackatHome from '../games/HuntingJackatHome';
import NeonBreaker from '../games/NeonBreaker';
import NeonLights from '../games/NeonLights';
import Olko2 from '../games/Olko2';
import SquirrelConnection from '../games/SquirrelConnection';
import TeslaDefense from '../games/TeslaDefense';

const itemsPerPage = 12;
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const games = [
    <BlockDomino/>,
    <AirportSniper/>,
    <EndlessDimension/>,
    <FlowerMage/>,
    <FruitBubble/>,
    <GalaxyShooter/>,
    <HuntingJackatHome/>,
    <NeonBreaker/>,
    <NeonLights/>,
    <Olko2/>,
    <SquirrelConnection/>,
    <TeslaDefense/>,

  ];

  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-4 bg-gradient-to-br from-indigo-500 to-violet-300 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentGames.map((game, index) => (
          <div key={index} className=" p-4 flex items-center justify-center">
            {game}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center"> 
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex space-x-2'}
          pageLinkClassName={'px-4 py-2 rounded-lg bg-blue-500 text-white'}
          activeClassName={'bg-blue-700 text-white'} 
        />
      </div>
    </div>
  );
};

export default Dashboard;
