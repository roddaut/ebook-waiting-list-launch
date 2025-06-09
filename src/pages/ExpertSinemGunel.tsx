
import React from 'react';
import ExpertTemplate from '@/components/ExpertTemplate';
import { getExpertBySlug } from '@/data/experts';

const ExpertSinemGunel = () => {
  const expert = getExpertBySlug('sinem-gunel');
  
  if (!expert) {
    return <div>Expert not found</div>;
  }

  return <ExpertTemplate expert={expert} />;
};

export default ExpertSinemGunel;
