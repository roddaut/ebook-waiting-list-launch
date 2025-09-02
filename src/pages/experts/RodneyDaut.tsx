
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const RodneyDaut = () => {
  const expertData: ExpertHomeData = {
    name: 'Rodney Daut',
    photo: '',
    bullets: [
      'The misunderstood learning principle that makes some course formats vastly more effective than others',
      'Why student "resistance" is actually your most valuable feedback signal',
      'The simple framework question that eliminates 90% of course creation confusion'
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

export default RodneyDaut;
