
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const RobertPlank = () => {
  const expertData: ExpertHomeData = {
    name: 'Robert Plank',
    photo: '',
    bullets: [
      'The content structure that engages four different thinking styles simultaneously',
      'Why the most common podcasting format might be sabotaging your client acquisition',
      'How one conversation can be transformed into eight different content pieces'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default RobertPlank;
