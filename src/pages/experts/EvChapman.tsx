
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const EvChapman = () => {
  const expertData: ExpertHomeData = {
    name: 'Ev Chapman',
    photo: '/lovable-uploads/011c4c60-4190-42f7-bce1-2ed2776d4381.png',
    bullets: [
      'Why your keyboard might be holding back your best ideas',
      'The surprising way AI transforms your writing process without taking over your voice',
      'Why training AI on your core values and personal stories leads to better results than just giving it a style guide'
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

export default EvChapman;
