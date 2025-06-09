
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const TomKuegler = () => {
  const expertData: ExpertHomeData = {
    name: 'Tom Kuegler',
    photo: '',
    bullets: [
      'The training method that allows AI to think exactly like you do',
      'Why getting 70% of your expertise automated creates exponential impact',
      'The "magic trick" effect that makes clients instantly value your expertise'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default TomKuegler;
