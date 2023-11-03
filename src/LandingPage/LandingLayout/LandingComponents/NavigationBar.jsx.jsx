import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="bg-gradient-to-br backdrop-blur-lg fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="#" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DANG</span>
          </a>
          <div className="flex md:order-2">
            <button onClick={openModal} type="button" className="text-white bg-gradient-to-br backdrop-blur-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
              Get started
            </button>
          </div>
          <div className="items-center justify between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gradient-to-br backdrop-blur-lg">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 md:dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 md:dark-hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default NavigationBar;
