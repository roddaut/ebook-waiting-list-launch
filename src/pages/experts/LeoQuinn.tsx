
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const LeoQuinn = () => {
  const expertData: ExpertHomeData = {
    name: 'Leo Quinn',
    photo: '',
    bullets: [
      'The "rejection challenge" that unexpectedly transformed his business growth',
      'Why this overlooked communication channel gets 5X better response rates in a digital world',
      'The psychological trigger that makes your outreach impossible to ignore'
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

export default LeoQuinn;
