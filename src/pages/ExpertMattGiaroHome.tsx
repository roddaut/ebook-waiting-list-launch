
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const ExpertMattGiaroHome = () => {
  const expertData: ExpertHomeData = {
    name: 'Matt Giaro',
    photo: '', // Placeholder for now
    bullets: [
      'Bullet 1',
      'Bullet 2', 
      'Bullet 3'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default ExpertMattGiaroHome;
