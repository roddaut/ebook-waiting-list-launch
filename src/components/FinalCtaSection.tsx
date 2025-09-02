
import React from 'react';
import SignupForm from './SignupForm';

const FinalCtaSection = () => {
  return (
    <section className="py-16 bg-black-ebook text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Download Profitable Playbooks Now – It&apos;s $0</h2>
        <p className="text-xl mb-4 max-w-2xl mx-auto">
          Get the ebook 5,000+ creators wish they had when they started.
        </p>
        <p className="text-xl mb-8 font-bold">👉 Grab Your Copy for $0</p>
        
        <div className="max-w-md mx-auto">
          <SignupForm isDarkBackground={true} />
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
