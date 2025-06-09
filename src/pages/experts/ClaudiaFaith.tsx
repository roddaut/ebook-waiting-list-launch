
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const ClaudiaFaith = () => {
  const expertData: ExpertHomeData = {
    name: 'Claudia Faith',
    photo: '',
    bullets: [
      'The counterintuitive communication method that dramatically increases audience interaction',
      'The surprising way investor emails launched her successful writing career',
      'Why consistency without this key element rarely leads to sustainable success'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default ClaudiaFaith;
