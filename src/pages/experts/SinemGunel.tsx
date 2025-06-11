
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const SinemGunel = () => {
  const expertData: ExpertHomeData = {
    name: 'Sinem Günel',
    photo: '/lovable-uploads/8a277013-7588-484e-8b8e-e43d87927bde.png',
    bullets: [
      'The counterintuitive pricing strategy that removes sales anxiety while maximizing revenue',
      'The unexpected customer journey that leads to the highest coaching conversions',
      'The simple question that transforms discovery calls into sales conversations'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ExpertHeroSectionWithPhoto expert={expertData} />
      <WhatYoullLearnSection />
      <SignupSection />
      <WhatMakesDifferentSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default SinemGunel;
