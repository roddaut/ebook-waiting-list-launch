
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const KevonCheung = () => {
  const expertData: ExpertHomeData = {
    name: 'Kevon Cheung',
    photo: '',
    bullets: [
      'The detective-inspired technique that reveals what people actually want',
      'How broadcasting your process creates pre-sold customers without hard selling',
      'Why excited reactions are often misleading indicators of purchase intent'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default KevonCheung;
