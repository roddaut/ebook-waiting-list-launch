
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const JariRoomer = () => {
  const expertData: ExpertHomeData = {
    name: 'Jari Roomer',
    photo: '',
    bullets: [
      'The surprising reason his high-priced flagship course underperformed—and the pivot that saved his business',
      'The customer psychology insight that transformed his approach to product creation',
      'The validation method that reveals what people will actually pay for (not just say they want)'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default JariRoomer;
