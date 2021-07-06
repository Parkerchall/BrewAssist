import React from 'react';
import PotionCard from './PotionCard';

function PotionList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.search || [];
  }
  return (
    <div className="result">
      <PotionCard />
    </div>
  );
};

export default PotionList;