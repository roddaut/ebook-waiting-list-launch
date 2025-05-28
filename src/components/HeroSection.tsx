
import React from 'react';
import EbookCover from './EbookCover';
import SignupForm from './SignupForm';

const HeroSection = () => {
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
            
            {/* New "For example" section */}
            <div className="mb-6">
              <p className="text-lg text-gray-800 mb-3 font-medium">
                For example, you'll discover:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Kristina God</strong> - How the content triangle transforms one idea into multiple engagement formats</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Niharikaa Sodhi</strong> - The outlining hack that eliminates writer's block</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Tom Kueglar</strong> - How to get AI to give you instant feedback to improve your writing</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Josh Spector</strong> - The inbox mining technique that reveals endless content opportunities</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-800 mt-4">
                And even more described below ...
              </p>
            </div>

            {/* Sign-up box moved to left column, below text */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[90%] mt-8">
              <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
              <SignupForm isDarkBackground={false} />
              <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
            </div>
          </div>
          
          {/* Right column: Sign-up box */}
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

export default HeroSection;
