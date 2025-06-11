
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const MichaelSimmons = () => {
  const expertData: ExpertHomeData = {
    name: 'Michael Simmons',
    photo: '',
    bullets: [
      'The "Idea Mountain" method that helps you create concepts that spread virally',
      'Why "concept marketing" outperforms traditional content marketing in the long run',
      'How naming ideas properly creates exponential spread beyond your own audience'
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

export default MichaelSimmons;
