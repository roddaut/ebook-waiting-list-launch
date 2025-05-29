
import React, { useState } from 'react';

const EbookCover: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  // Main ebook cover image (uploaded by user) - UPDATED TO CURRENT UPLOAD
  const mainImage = "/lovable-uploads/85ff609d-dcef-4bb4-bc69-d68e55489233.png";
  
  // Fallback image from Unsplash if the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
  
  const handleImageError = () => {
    console.log("Main image failed to load:", mainImage);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log("Image loaded successfully:", mainImage);
  };
  
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-lg transform rotate-3 shadow-xl"></div>
        <div className="relative bg-transparent rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={imageError ? fallbackImage : mainImage} 
            alt="Profitable Playbooks for Writers eBook Cover" 
            className="w-full h-auto rounded-lg"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default EbookCover;
