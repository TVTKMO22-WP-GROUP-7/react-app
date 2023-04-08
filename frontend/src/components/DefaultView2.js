import React from 'react';
import V3 from './visualisations/V3';
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';

export default function DefaultView2() {

  return (
    <>
      <div className="default">
        <p>Tänne loput V-Näkymät</p>
      </div>
      <div>
        <V3 />
        <V4 />
        <V5 />
      </div>
    </>
  );
}