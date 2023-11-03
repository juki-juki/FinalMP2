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
   
  );
};

export default Dashboard;
