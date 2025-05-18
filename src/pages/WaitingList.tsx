
import React from 'react';
import EbookCover from '../components/EbookCover';
import SignupForm from '../components/SignupForm';
import Features from '../components/Features';

const WaitingList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="typewriter text-3xl md:text-5xl font-black tracking-tight text-black-ebook mb-4">
              Turn Your Words Into Wealth
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Discover practical strategies from successful writers who have built profitable writing businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <EbookCover />
            
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <SignupForm isDarkBackground={false} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black-ebook">What You'll Learn</h2>
          <Features />
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-black-ebook text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Writing Profitable?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our waiting list to be the first to receive the free "Profitable Playbooks for Writers" ebook
          </p>
          
          <div className="max-w-md mx-auto">
            <SignupForm isDarkBackground={true} />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Rodney Daut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WaitingList;
