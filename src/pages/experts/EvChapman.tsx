
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const EvChapman = () => {
  const expertData: ExpertHomeData = {
    name: 'Ev Chapman',
    photo: '',
    bullets: [
      'Why your keyboard might be holding back your best ideas',
      'The surprising way AI transforms your writing process without taking over your voice',
      'Why training AI on your core values and personal stories leads to better results than just giving it a style guide'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default EvChapman;
