import React from 'react';
import V1 from './V1';

export default function DefaultView() {

  return (
    <>
      <div className="default" style = {{Width: 1000}}>
        <p>Tämä on sivu on path / eli ensimmäinen mikä näkyy</p>
        <p>Jos käyttäjä ei ole logannut sisään, näkyy NotLoggedNavbar</p>
        <p>Jos käyttäjä on logannut sisään, näkyy NavBar</p>
        <p>Tähän alle näkymät V1 ja V2 allekkain ??</p>       
      </div>
      <div> 
                <V1 />
      </div>
    </>
  );
}

 





