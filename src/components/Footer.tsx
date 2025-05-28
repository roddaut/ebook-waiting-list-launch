
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Rodney Daut. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
