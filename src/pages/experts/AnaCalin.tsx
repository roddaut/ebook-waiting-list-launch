
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const AnaCalin = () => {
  const expertData: ExpertHomeData = {
    name: 'Ana Calin',
    photo: '/lovable-uploads/8fa53bdd-099e-46f2-9129-78ce1bf18f50.png',
    bullets: [
      'The counterintuitive way to build community that most creators get backward',
      'The platform feature most writers underutilize that dramatically increases engagement',
      'The trust-building practice that transformed her Substack from publication to community'
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

export default AnaCalin;
