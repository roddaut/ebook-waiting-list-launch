
import React from 'react';
import ExpertTemplate from '@/components/ExpertTemplate';
import { getExpertBySlug } from '@/data/experts';

const ExpertMattGiaro = () => {
  const expert = getExpertBySlug('matt-giaro');
  
  if (!expert) {
    return <div>Expert not found</div>;
  }

  return <ExpertTemplate expert={expert} />;
};

export default ExpertMattGiaro;
