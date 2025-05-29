
import React, { useState, useEffect } from 'react';

const EbookCover: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Main ebook cover image (uploaded by user) - UPDATED TO LATEST UPLOAD
  const mainImage = "/lovable-uploads/0168c13f-9b7c-4948-8cce-56dded3be4d6.png";
  
  // Add cache-busting timestamp
  const timestamp = Date.now();
  const mainImageWithCacheBust = `${mainImage}?v=${timestamp}`;
  
  // Alternative path formats to try
  const alternativePaths = [
    mainImage,
    `./lovable-uploads/0168c13f-9b7c-4948-8cce-56dded3be4d6.png`,
    `lovable-uploads/0168c13f-9b7c-4948-8cce-56dded3be4d6.png`,
    `${window.location.origin}/lovable-uploads/0168c13f-9b7c-4948-8cce-56dded3be4d6.png`
  ];
  
  // Fallback image from Unsplash if the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
  
  useEffect(() => {
    console.log("=== EbookCover Debug Info ===");
    console.log("Main image path:", mainImage);
    console.log("Cache-busted path:", mainImageWithCacheBust);
    console.log("Current URL:", window.location.href);
    console.log("Image error state:", imageError);
    console.log("Image loaded state:", imageLoaded);
    
    // Test if image exists by trying to load it
    const testImage = new Image();
    testImage.onload = () => {
      console.log("✅ Image loaded successfully:", mainImage);
      setImageLoaded(true);
    };
    testImage.onerror = () => {
      console.log("❌ Image failed to load:", mainImage);
      console.log("Trying alternative paths...");
      tryAlternativePaths();
    };
    testImage.src = mainImageWithCacheBust;
  }, []);

  const tryAlternativePaths = async () => {
    for (const path of alternativePaths) {
      console.log("Testing path:", path);
      try {
        const testImg = new Image();
        await new Promise((resolve, reject) => {
          testImg.onload = resolve;
          testImg.onerror = reject;
          testImg.src = path;
        });
        console.log("✅ Alternative path works:", path);
        return;
      } catch (error) {
        console.log("❌ Alternative path failed:", path);
      }
    }
    console.log("All paths failed, using fallback");
    setImageError(true);
  };

  const handleImageError = () => {
    console.log("❌ Main image failed to load in img element:", mainImage);
    console.log("Switching to fallback image");
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log("✅ Image loaded successfully in img element:", mainImage);
    setImageLoaded(true);
  };
  
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-lg transform rotate-3 shadow-xl"></div>
        <div className="relative bg-transparent rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={imageError ? fallbackImage : mainImageWithCacheBust} 
            alt="Profitable Playbooks for Writers eBook Cover" 
            className="w-full h-auto rounded-lg"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          {/* Debug overlay - remove this after fixing */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs p-2 rounded max-w-xs">
            <div>Status: {imageError ? 'Using fallback' : imageLoaded ? 'Loaded successfully' : 'Loading...'}</div>
            <div>Path: {imageError ? 'fallback' : mainImage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookCover;
