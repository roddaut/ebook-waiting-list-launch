
import React from 'react';
import ExpertTemplate from '@/components/ExpertTemplate';
import { getExpertBySlug } from '@/data/experts';

const ExpertTomKuegler = () => {
  const expert = getExpertBySlug('tom-kuegler');
  
  if (!expert) {
    return <div>Expert not found</div>;
  }

  return <ExpertTemplate expert={expert} />;
};

export default ExpertTomKuegler;
