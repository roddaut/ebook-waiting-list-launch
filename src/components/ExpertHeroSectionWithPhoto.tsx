
import React from 'react';
import EbookCover from './EbookCover';
import SignupForm from './SignupForm';
import { ExpertHomeData } from '@/types/expertHome';

interface ExpertHeroSectionWithPhotoProps {
  expert: ExpertHomeData;
}

const ExpertHeroSectionWithPhoto: React.FC<ExpertHeroSectionWithPhotoProps> = ({ expert }) => {
  return (
    <section className="hero-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black-ebook mb-4 mx-auto max-w-5xl">
            They Turned Content Into Income. So Can You.
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Inside this free ebook, real coaches and creators share how they grew their audience and their income—one piece of content at a time.
          </p>
        </div>
        
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left column: Book cover and main text */}
          <div>
            <p className="text-lg text-gray-800 mb-4">
              Don't waste time with generic advice.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              This free ebook gives you real-world strategies from creators using content to build income online—right now.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Each chapter is a 10-minute mini-masterclass packed with practical insights from coaches, consultants, and creators who turn content into clients and followers into freedom.
            </p>
            
            {/* Expert-specific section with photo positioned to the left of bullets */}
            <div className="mb-6">
              <p className="text-lg text-gray-800 mb-3 font-medium">
                Featuring insights from {expert.name}:
              </p>
              
              <div className="flex items-start gap-3">
                {expert.photo && (
                  <div className="flex-shrink-0 overflow-hidden rounded-full">
                    <img 
                      src={expert.photo} 
                      alt={expert.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                      style={{
                        objectPosition: 'center 20%',
                        transform: 'scale(1.3)'
                      }}
                    />
                  </div>
                )}
                
                <ul className="space-y-2 flex-1">
                  {expert.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-lg text-gray-800 mt-4">
                And more from other creators described below ...
              </p>
            </div>

            {/* Sign-up box moved to left column, below text */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[90%] mt-8">
              <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
              <SignupForm isDarkBackground={false} />
              <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
            </div>
          </div>
          
          {/* Right column: Book cover */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[380px]">
              <EbookCover />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertHeroSectionWithPhoto;
