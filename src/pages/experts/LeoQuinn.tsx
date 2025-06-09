
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const LeoQuinn = () => {
  const expertData: ExpertHomeData = {
    name: 'Leo Quinn',
    photo: '',
    bullets: [
      'The "rejection challenge" that unexpectedly transformed his business growth',
      'Why this overlooked communication channel gets 5X better response rates in a digital world',
      'The psychological trigger that makes your outreach impossible to ignore'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default LeoQuinn;
