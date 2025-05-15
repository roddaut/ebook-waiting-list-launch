
import React from 'react';

const EbookCover: React.FC = () => {
  return (
    <div className="flex justify-center mb-8 lg:mb-0">
      <div className="relative w-64 md:w-80 lg:w-96">
        <div className="absolute inset-0 rounded-lg transform rotate-3 shadow-xl"></div>
        <div className="relative bg-transparent rounded-lg shadow-2xl overflow-hidden">
          <img 
            src="/ebook-cover.png" 
            alt="Profitable Playbooks for Writers eBook Cover" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EbookCover;
