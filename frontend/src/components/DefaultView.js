
import React from 'react'
import Navbar from './Navbar'

export default function DefaultView() {
    return (
    <>
    <Navbar/>
    <div className="default">
            <p>This is the default view user gets when logged in</p>
            <p>Tähän alle näkymät V1 ja V2 allekkain ??</p>
        </div>
    </>      
    );
}