
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatYoullLearnSection from '../components/WhatYoullLearnSection';
import SignupSection from '../components/SignupSection';
import WhatMakesDifferentSection from '../components/WhatMakesDifferentSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

const HomeV21 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <WhatYoullLearnSection />
      <SignupSection />
      <WhatMakesDifferentSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default HomeV21;
