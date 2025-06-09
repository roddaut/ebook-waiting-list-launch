
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const AnaCalin = () => {
  const expertData: ExpertHomeData = {
    name: 'Ana Calin',
    photo: '',
    bullets: [
      'The counterintuitive way to build community that most creators get backward',
      'The platform feature most writers underutilize that dramatically increases engagement',
      'The trust-building practice that transformed her Substack from publication to community'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default AnaCalin;
