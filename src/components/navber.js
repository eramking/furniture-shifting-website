import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-4xl">LOGO</div>
      <div className="flex space-x-6 text-xl">
        <div>Home</div>
        <div>Features</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
    </nav>
  );
};

export default Navbar;