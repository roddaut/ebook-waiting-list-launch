
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const PhilipHofmacher = () => {
  const expertData: ExpertHomeData = {
    name: 'Philip Hofmacher',
    photo: '',
    bullets: [
      'The three-part framework that\'s replacing traditional online education',
      'Why information alone has become almost worthless in today\'s market',
      'How the "mountain" metaphor transforms how you think about community building'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default PhilipHofmacher;
