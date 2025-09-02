
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import EbookCover from "@/components/EbookCover";

const Download = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar with Rodney's photo */}
          <div className="flex justify-center mb-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src="/lovable-uploads/e027d78c-6c7e-44e0-a6db-e81c35d9ef13.png" alt="Rodney Daut" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-2xl font-bold mb-6">Here's your ebook</h1>
          
          {/* Mobile Download button - visible only on small screens */}
          <div className="mb-8 block sm:hidden">
            <a 
              href="https://profplaybooks.s3.amazonaws.com/ProfitablePlaybooks.pdf" 
              download="Profitable_Playbooks.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg w-full"
            >
              Download Ebook
            </a>
          </div>
          
          {/* Download message */}
          <div className="space-y-4 text-left">
            <p className="text-md">
              You're just seconds away from discovering over 20 ways to grow your business using the power of the written word.
            </p>
            
            <p className="text-md">
              Every strategy is used by successful entrepreneurs and is working in today's online world.
            </p>
            
            <p className="text-md">
              You can start using them right away to grow your business.
            </p>
            
            <p className="text-md">
              After you've tried a few, please send me a note to let me know how you are doing at <a href="mailto:rodney@selfinfluence.net" className="text-blue-600 hover:underline">rodney@selfinfluence.net</a>. I respond to every email.
            </p>
            
            <p className="text-md pt-4">
              With gratitude,
            </p>
            <p className="text-md">
              Rodney Daut
            </p>
            
            {/* Desktop Download button - visible only on sm screens and above */}
            <div className="pt-6 hidden sm:block">
              <a 
                href="https://profplaybooks.s3.amazonaws.com/ProfitablePlaybooks.pdf" 
                download="Profitable_Playbooks.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Download Ebook
              </a>
            </div>
            
            {/* Ebook cover - kept at bottom */}
            <div className="pt-8">
              <EbookCover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
