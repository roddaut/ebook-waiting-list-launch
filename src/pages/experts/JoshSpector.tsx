
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const JoshSpector = () => {
  const expertData: ExpertHomeData = {
    name: 'Josh Spector',
    photo: '',
    bullets: [
      'The overlooked content source that\'s generating your best material without you realizing it',
      'The fishing vs. farming content strategy that builds long-term value',
      'Why constantly creating new content might be the least efficient growth strategy'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default JoshSpector;
