
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const KarenCherry = () => {
  const expertData: ExpertHomeData = {
    name: 'Karen Cherry',
    photo: '',
    bullets: [
      'The counterintuitive content strategy with a 92% subscriber retention rate',
      'Why two subscriber types require completely different conversion approaches',
      'The visual element that instantly signals high-value content worth paying for'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default KarenCherry;
