import React from 'react';
import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from './visualisations/V3';

export default function DefaultView() {
  return (
    <>
      <div>
        <V1 />
        <V2 />
        <V3 />
      </div>
    </>
  );
}



