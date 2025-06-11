
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const TomKuegler = () => {
  const expertData: ExpertHomeData = {
    name: 'Tom Kuegler',
    photo: '/lovable-uploads/50807cc7-a8a6-448e-b076-8f4b773adbc1.png',
    bullets: [
      'The training method that allows AI to think exactly like you do',
      'Why getting 70% of your expertise automated creates exponential impact',
      'The "magic trick" effect that makes clients instantly value your expertise'
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

export default TomKuegler;
