import React from 'react';
import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from "./visualisations/V3";

export default function DefaultView() {

  return (
    <div className="grid-container">
      <div className="v-box">
        <V1 />
      </div>
      <div className="v-box">
        <V2 />
      </div>
      <div className="v-box">
        <V3 />
      </div>
    </div>
  );
}