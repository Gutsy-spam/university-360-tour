// Offsite.js

import React from 'react';
import './Offsite.css';
const Offsite = () => {
  const handleMoreInfoClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="offsite">
      <h1>Offsite Campuses</h1>
      <div className="campus">
        <h2>Bhaderwah Campus</h2>
        <p>Courses Offered: MCA, MBA, MA English, Certificate course in E-Learning For more information,</p>
        <a
          href="https://www.bhaderwahcampus.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.bhaderwahcampus.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Kathua Campus</h2>
        <p>Courses Offered: MBA For more information,</p>
        <a
          href="https://kathuacampus.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://kathuacampus.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Kishtwar Campus</h2>
        <p>Courses Offered: MSc IT, PG in Kashmiri, PG in Geology- Hydrology & Soil Dynamics For more information,</p>
        <a
          href="https://www.kishtwarcampus.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.kishtwarcampus.in/');
          }}
        >
          click here
        </a>
      </div>
      <div className="campus">
        <h2>Poonch Campus</h2>
        <p>Courses Offered: Certificate course in E-Learning for Women For more information,</p>
        <a
          href="https://www.jammuuniversity.ac.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.jammuuniversity.ac.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Ramnagar Campus</h2>
        <p>Courses Offered: MA Sociology, MCA For more information,</p>
        <a
          href="https://www.jammuuniversity.ac.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.jammuuniversity.ac.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Reasi Campus</h2>
        <p>Courses Offered: MA Sociology For more information,</p>
        <a
          href="https://www.jammuuniversity.ac.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.jammuuniversity.ac.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Udhampur Campus</h2>
        <p>Courses Offered: M.Com, MA Economics For more information,</p>
        <a
          href="http://udhampurcampus.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('http://udhampurcampus.in/');
          }}
        >
           click here
        </a>
      </div>
      <div className="campus">
        <h2>Doda Campus</h2>
        <p>Courses Offered: Certificate course in E-Learning For more information,</p>
        <a
          href="https://www.jammuuniversity.ac.in/"
          onClick={(e) => {
            e.preventDefault();
            handleMoreInfoClick('https://www.jammuuniversity.ac.in/');
          }}
        >
           click here
        </a>
      </div>
    </div>
  );
};

export default Offsite;
