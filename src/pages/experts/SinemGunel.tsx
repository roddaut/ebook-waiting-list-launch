
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const SinemGunel = () => {
  const expertData: ExpertHomeData = {
    name: 'Sinem Günel',
    photo: '',
    bullets: [
      'The counterintuitive pricing strategy that removes sales anxiety while maximizing revenue',
      'The unexpected customer journey that leads to the highest coaching conversions',
      'The simple question that transforms discovery calls into sales conversations'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default SinemGunel;
