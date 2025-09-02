
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const NiharikaaSodhi = () => {
  const expertData: ExpertHomeData = {
    name: 'Niharikaa Sodhi',
    photo: '',
    bullets: [
      'Why most writers fail to stick with their publishing schedule (and the straightforward fix)',
      'The surprising planning method that makes consistent writing possible even with a full-time job',
      'The content outlining approach that eliminates "blank page syndrome" forever'
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

export default NiharikaaSodhi;
