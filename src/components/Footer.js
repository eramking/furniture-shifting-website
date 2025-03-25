import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#5b5858] text-white text-center py-12">
      <h2 className="text-4xl mb-6">Contact Us</h2>
      <div className="flex justify-center space-x-6 text-xl">
        <div>Email: email@gmai.com</div>
        <div>Phone: 01701312706</div>
      </div>
      <div className="mt-8 text-lg">Send us a message</div>
    </footer>
  );
};

export default Footer;