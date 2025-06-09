
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const NiharikaaSodhi = () => {
  const expertData: ExpertHomeData = {
    name: 'Niharikaa Sodhi',
    photo: '',
    bullets: [
      'Why most writers fail to stick with their publishing schedule (and the straightforward fix)',
      'The surprising planning method that makes consistent writing possible even with a full-time job',
      'The content outlining approach that eliminates "blank page syndrome" forever'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default NiharikaaSodhi;
