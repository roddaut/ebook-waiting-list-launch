
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const MichaelSimmons = () => {
  const expertData: ExpertHomeData = {
    name: 'Michael Simmons',
    photo: '',
    bullets: [
      'The "Idea Mountain" method that helps you create concepts that spread virally',
      'Why "concept marketing" outperforms traditional content marketing in the long run',
      'How naming ideas properly creates exponential spread beyond your own audience'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default MichaelSimmons;
