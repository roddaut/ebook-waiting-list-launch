
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const RussellNohelty = () => {
  const expertData: ExpertHomeData = {
    name: 'Russell Nohelty',
    photo: '',
    bullets: [
      'The forgotten platform most creators overlook for book funding',
      'Why the "one big launch" approach is usually less effective than this alternative',
      'How legitimate scarcity creates marketing momentum other tactics can\'t match'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default RussellNohelty;
