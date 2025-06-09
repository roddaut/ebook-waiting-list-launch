
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const LandonPoburan = () => {
  const expertData: ExpertHomeData = {
    name: 'Landon Poburan',
    photo: '',
    bullets: [
      'Subliminal selling: The deceptively simple sales model that eliminates complicated funnels yet still converts',
      'The "invisible survey" technique that reveals exactly what your audience will pay for',
      'Why automation might be killing your most valuable customer insights'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default LandonPoburan;
