
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const MattGiaro = () => {
  const expertData: ExpertHomeData = {
    name: 'Matt Giaro',
    photo: '',
    bullets: [
      'The counterintuitive productivity secret that makes work feel effortless',
      'The surprising way constraints unlock your most original thinking',
      'How combining templates with AI dramatically increases productivity while maintaining your unique perspective'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default MattGiaro;
