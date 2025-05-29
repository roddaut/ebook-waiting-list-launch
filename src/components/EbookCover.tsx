
import React, { useState } from 'react';

const EbookCover: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  // Main ebook cover image (uploaded by user)
  const mainImage = "/lovable-uploads/92871579-114e-4f5c-a37f-2ed5b2deb1ac.png";
  
  // Fallback image from Unsplash if the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
  
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-lg transform rotate-3 shadow-xl"></div>
        <div className="relative bg-transparent rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={imageError ? fallbackImage : mainImage} 
            alt="Profitable Playbooks for Writers eBook Cover" 
            className="w-full h-auto rounded-lg"
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default EbookCover;
