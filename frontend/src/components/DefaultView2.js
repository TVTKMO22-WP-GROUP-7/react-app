
import React from 'react';
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';

export default function DefaultView2() {

  return (
    <div className="grid-container">
      <div className="grid-item">
        <V4 />
      </div>
      <div className="grid-item">
        <V5 />
      </div>
    </div>
  );
}