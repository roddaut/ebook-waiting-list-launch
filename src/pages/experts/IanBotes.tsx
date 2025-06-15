
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const IanBotes = () => {
  const expertData: ExpertHomeData = {
    name: 'Ian Botes',
    photo: '/lovable-uploads/80ff04b6-4213-4df1-8188-2d15e3e75ac5.png',
    bullets: [
      'The writing approach that sells your worldview rather than just your product',
      'The counterintuitive reason longer content sometimes converts better than short-form',
      'The three-part pattern behind effective persuasive writing'
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

export default IanBotes;
