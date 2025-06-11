
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
    photo: '/lovable-uploads/ea72b0e2-3efa-4118-9d8c-b721374c0c6c.png',
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
