
import React from 'react';
import ExpertHeroSection from './ExpertHeroSection';
import WhatYoullLearnSection from './WhatYoullLearnSection';
import SignupSection from './SignupSection';
import WhatMakesDifferentSection from './WhatMakesDifferentSection';
import FinalCtaSection from './FinalCtaSection';
import Footer from './Footer';
import { ExpertHomeData } from '@/types/expertHome';

interface ExpertHomePageProps {
  expert: ExpertHomeData;
}

const ExpertHomePage: React.FC<ExpertHomePageProps> = ({ expert }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ExpertHeroSection expert={expert} />
      <WhatYoullLearnSection />
      <SignupSection />
      <WhatMakesDifferentSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default ExpertHomePage;
