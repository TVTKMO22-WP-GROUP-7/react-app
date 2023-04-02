import React from 'react';
import V5 from './visualisations/V5';

export default function DefaultView2() {

  return (
    <>
      <div className="default">
        <p>Tänne loput V-Näkymät</p>
      </div>
      <div>
        <V5 />
      </div>
    </>
  );
}