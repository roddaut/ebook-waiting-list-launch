
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const DavidMcIlroy = () => {
  const expertData: ExpertHomeData = {
    name: 'David McIlroy',
    photo: '',
    bullets: [
      'The counterintuitive way to know which ideas are worth sharing with your audience',
      'Why "showing the shadow" might be the missing ingredient in your content strategy',
      'How to get people subscribe to YOU, not just your content'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default DavidMcIlroy;
