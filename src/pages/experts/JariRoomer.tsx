
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const JariRoomer = () => {
  const expertData: ExpertHomeData = {
    name: 'Jari Roomer',
    photo: '',
    bullets: [
      'The surprising reason his high-priced flagship course underperformed—and the pivot that saved his business',
      'The customer psychology insight that transformed his approach to product creation',
      'The validation method that reveals what people will actually pay for (not just say they want)'
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

export default JariRoomer;
