import React from 'react';
import './juta.css';

const JUTA = () => {
  const handleJutaClick = () => {
    window.open('http://www.juta.org.in/', '_blank');
  };

  return (
    <div className="juta-container" onClick={handleJutaClick}>
      <h1>JUTA(Jammu University Teacher Association</h1>
    </div>
  );
};

export default JUTA;
