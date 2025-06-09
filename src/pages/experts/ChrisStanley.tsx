
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const ChrisStanley = () => {
  const expertData: ExpertHomeData = {
    name: 'Chris Stanley',
    photo: '',
    bullets: [
      'The backwards publishing strategy that finally sold his course after months of zero sales',
      'Why the "kitchen sink" approach to publishing is killing your profits',
      'The counterintuitive writing framework that keeps readers engaged from first page to last'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default ChrisStanley;
