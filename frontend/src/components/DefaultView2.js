import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function DefaultView2() {
  const [page, setPage] = useState(2);
  const navigate = useNavigate();

  const handlePageChange = () => {
    setPage(page === 1 ? 2 : 1);
    navigate(`/defaultview${page === 1 ? '2' : ''}`);
  };

  return (
    <>
      <Navbar />
      <div className="default">
        <p>This is the second page of the default view.</p>
        <button onClick={handlePageChange}>
          Page {page === 1 ? '1/2' : '2/2'}
        </button>
      </div>
    </>
  );
}