
import React from 'react';
import ExpertHeroSectionWithPhoto from '@/components/ExpertHeroSectionWithPhoto';
import WhatYoullLearnSection from '@/components/WhatYoullLearnSection';
import SignupSection from '@/components/SignupSection';
import WhatMakesDifferentSection from '@/components/WhatMakesDifferentSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import { ExpertHomeData } from '@/types/expertHome';

const DavidMcIlroy = () => {
  const expertData: ExpertHomeData = {
    name: 'David McIlroy',
    photo: '',
    bullets: [
      'The counterintuitive way to know which ideas are worth sharing with your audience',
      'Why "showing the shadow" might be the missing ingredient in your content strategy',
      'How to get people subscribe to YOU, not just your content'
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

export default DavidMcIlroy;
