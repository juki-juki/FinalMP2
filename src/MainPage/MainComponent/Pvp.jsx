import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import RuneMahjong from '../games/RuneMahjong';
import SafariMahjong from '../games/SafariMahjong';
import ScaryMemoryHalloween from '../games/ScaryMemoryHalloween';
import SeaJong from '../games/SeaJong';
import SearchtheSands from '../games/SearchtheSands';
import SenseiMahjong from '../games/SenseiMahjong';
import ShanghaiDynasty from '../games/ShanghaiDynasty';
import SheepandWolves from '../games/SheepandWolves';
import Shinro from '../games/Shinro';
import SimonSays from '../games/SimonSays';
import SlidePuzzle from '../games/SlidePuzzle';
import SlidonMahjongSlide from '../games/SlidonMahjongSlide';
import SnowBall from '../games/SnowBall';
import SnowMan from '../games/SnowMan';
import Space from '../games/Space';
import Tetrix from '../games/Tetrix';
import YinandYang from '../games/YinandYang';
import Nav from './Nav';


const itemsPerPage = 4;

const Pvp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const games = [
  
    
<Tetrix/>,
<YinandYang/>,
<RuneMahjong />,
    <SafariMahjong />,
    <ScaryMemoryHalloween />,
    <SeaJong />,
    <SearchtheSands />,
    <SenseiMahjong />,
    <ShanghaiDynasty />,
    <SheepandWolves />,
    <Shinro />,
    <SimonSays />,
    <SlidePuzzle />,
    <SlidonMahjongSlide />,
    <SnowBall />,
    <SnowMan />,
    <Space />,


];
  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <Nav />
      <section
        className="bg-cover h-screen bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/space-background-with-planet-landscape_107791-6146.jpg?w=1480&t=st=1699193703~exp=1699194303~hmac=1cbfac2573d27aea76b1af8de67e9d4ed46da043b4fbdde32515427d1e7c7431')"
        }}
      >
        <div className="px-22 mx-auto max-w-screen-xl text-center py-14 lg:py-26">
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl">
            ARCADE
          </h1>
        </div>
      
      <div className="p-4  flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentGames.map((game, index) => (
            <div key={index} className="p-4 flex items-center justify-center">
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
      </section>
    </div>
  );
};

export default Pvp;
