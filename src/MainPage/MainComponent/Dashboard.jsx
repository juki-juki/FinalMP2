import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import AirportSniper from '../games/AirportSniper';
import BlockDomino from '../games/BlockDomino';

const itemsPerPage = 12;
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const games = [
    <BlockDomino/>,
    <AirportSniper/>
  ];

  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Add three buttons at the top */}
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 rounded-lg bg-green-500 text-white mr-2">
          Button 1
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-500 text-white mr-2">
          Button 2
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
          Button 3
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentGames.map((game, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
            {game}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center"> {/* Horizontal pagination */}
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
