
import React from 'react';
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';

export default function DefaultView2() {

  return (
    <div className="grid-container">
      <div className="v-box">
        <V4 />
      </div>
      <div className="v-box">
        <V5 />
      </div>
    </div>
  );
}