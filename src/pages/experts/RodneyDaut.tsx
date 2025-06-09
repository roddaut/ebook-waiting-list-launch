
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const RodneyDaut = () => {
  const expertData: ExpertHomeData = {
    name: 'Rodney Daut',
    photo: '',
    bullets: [
      'The misunderstood learning principle that makes some course formats vastly more effective than others',
      'Why student "resistance" is actually your most valuable feedback signal',
      'The simple framework question that eliminates 90% of course creation confusion'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default RodneyDaut;
