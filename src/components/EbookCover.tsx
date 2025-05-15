
import React from 'react';

const EbookCover: React.FC = () => {
  return (
    <div className="flex justify-center mb-8 lg:mb-0">
      <div className="relative w-64 md:w-80 lg:w-96">
        <div className="absolute inset-0 bg-yellow-ebook rounded-lg transform rotate-3 shadow-xl"></div>
        <div className="relative bg-yellow-ebook rounded-lg shadow-2xl overflow-hidden border-2 border-black-ebook">
          <div className="px-4 py-6 text-center">
            <h2 className="text-6xl md:text-7xl font-black text-black-ebook tracking-tight">
              PROFITABLE
            </h2>
            <div className="bg-black-ebook text-yellow-ebook text-xl md:text-2xl font-bold py-1 px-2 my-2">
              PLAYBOOKS FOR
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-black-ebook tracking-tight">
              WRITERS
            </h2>
            
            <div className="mt-8 mb-4 text-center">
              <p className="text-xl font-medium mb-1">Real Advice From Creators</p>
              <p className="text-xl font-medium">Who Turned <span className="font-bold">Words</span> into <span className="font-bold">Wealth</span></p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-32 bg-blue-typewriter rounded-lg relative">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-20 bg-white rounded-sm"></div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="grid grid-cols-6 gap-1">
                    {Array(12).fill(0).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-100 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-black-ebook">RODNEY DAUT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookCover;
