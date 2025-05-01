import React from 'react';

const NavBar = () => {
  return (
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#C89AFC]">
            ImproveConf
          </div>
          <div className="hidden md:flex space-x-6 flex justify-between items-center">
            <a href="#about" className="hover:text-purple-300">About</a>
            <a href="#speakers" className="hover:text-purple-300">Speakers</a>
            <a href="#schedule" className="hover:text-purple-300">Schedule</a>
            <a href="#partners" className="hover:text-purple-300">Partners</a>
            <a href="#contact" className="hover:text-purple-300">Contact</a>
            <button
                className="px-4 py-2 rounded-md font-medium bg-[#DF5950] cursor-pointer"
            >
              Get Ticket
            </button>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;