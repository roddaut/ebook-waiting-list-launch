
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const ClaudiaFaith = () => {
  const expertData: ExpertHomeData = {
    name: 'Claudia Faith',
    photo: '/lovable-uploads/8080e837-cb39-4743-ab90-178ce343d7d3.png',
    bullets: [
      'The counterintuitive communication method that dramatically increases audience interaction',
      'The surprising way investor emails launched her successful writing career',
      'Why consistency without this key element rarely leads to sustainable success'
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

export default ClaudiaFaith;
