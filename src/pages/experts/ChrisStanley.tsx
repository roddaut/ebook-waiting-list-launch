
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const ChrisStanley = () => {
  const expertData: ExpertHomeData = {
    name: 'Chris Stanley',
    photo: '/lovable-uploads/9675d008-16f6-42a6-9e90-4ea9dc65b99b.png',
    bullets: [
      'The backwards publishing strategy that finally sold his course after months of zero sales',
      'Why the "kitchen sink" approach to publishing is killing your profits',
      'The counterintuitive writing framework that keeps readers engaged from first page to last'
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

export default ChrisStanley;
