import React from 'react';
import Navbar from './Navbar';

export default function CustomPage() {
  return (
    <>
      <Navbar />
      <div className="custom">
        <p>This is the custom page</p>
      </div>
    </>
  );
}