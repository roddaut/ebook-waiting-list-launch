
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const MarkWils = () => {
  const expertData: ExpertHomeData = {
    name: 'Mark Wils',
    photo: '',
    bullets: [
      'Why this seemingly "old school" approach consistently outperforms trending social media strategies',
      'The simple greeting strategy that converts casual subscribers into potential coaching clients',
      'Why the "all-in-one" platform strategy beats specialized tools for growing a sustainable audience'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default MarkWils;
