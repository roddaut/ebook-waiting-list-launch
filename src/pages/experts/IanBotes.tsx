
import React from 'react';
import ExpertHomePage from '@/components/ExpertHomePage';
import { ExpertHomeData } from '@/types/expertHome';

const IanBotes = () => {
  const expertData: ExpertHomeData = {
    name: 'Ian Botes',
    photo: '',
    bullets: [
      'The writing approach that sells your worldview rather than just your product',
      'The counterintuitive reason longer content sometimes converts better than short-form',
      'The three-part pattern behind effective persuasive writing'
    ]
  };

  return <ExpertHomePage expert={expertData} />;
};

export default IanBotes;
