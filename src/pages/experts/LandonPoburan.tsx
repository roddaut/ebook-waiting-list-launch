
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const LandonPoburan = () => {
  const expertData: ExpertHomeData = {
    name: 'Landon Poburan',
    photo: '',
    bullets: [
      'Subliminal selling: The deceptively simple sales model that eliminates complicated funnels yet still converts',
      'The "invisible survey" technique that reveals exactly what your audience will pay for',
      'Why automation might be killing your most valuable customer insights'
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

export default LandonPoburan;
