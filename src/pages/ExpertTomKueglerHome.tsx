
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const ExpertTomKueglerHome = () => {
  const expertData: ExpertHomeData = {
    name: 'Tom Kuegler',
    photo: '', // Placeholder for now
    bullets: [
      'Bullet 1',
      'Bullet 2',
      'Bullet 3'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default ExpertTomKueglerHome;
