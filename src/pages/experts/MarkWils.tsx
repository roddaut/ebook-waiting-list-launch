
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const MarkWils = () => {
  const expertData: ExpertHomeData = {
    name: 'Mark Wils',
    photo: '',
    bullets: [
      'Why this seemingly "old school" approach consistently outperforms trending social media strategies',
      'The simple greeting strategy that converts casual subscribers into potential coaching clients',
      'Why the "all-in-one" platform strategy beats specialized tools for growing a sustainable audience'
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

export default MarkWils;
