// RedirectPage.js

import React from 'react';
import './abc.css';
const abc = () => {
  const handleMoreInfoClick = (url) => {
    window.open(url,'_blank');
  };

  return (
    <div className="abc">
    <h1>ABC Scheme</h1>
    <div className="scheme">
      <h2>Academic Bank of Credits</h2>
      <p>Enabling students mobility
across Higher Education Institutions For more information,</p>
      <a
        href="https://www.abc.gov.in/"
        onClick={(e) => {
          e.preventDefault();
          handleMoreInfoClick('https://www.abc.gov.in/');
        }}
      >
         click here
      </a>
    </div>
    </div>
  );
};

export default abc;
