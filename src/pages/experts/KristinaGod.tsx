
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const KristinaGod = () => {
  const expertData: ExpertHomeData = {
    name: 'Kristina God',
    photo: '',
    bullets: [
      'The content "triangle" that multiplies your reach without creating more work',
      'Why followers are "dead" and what metric actually matters for sustainable growth',
      'The multimedia shift that\'s changing how audiences consume content in 2025'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default KristinaGod;
