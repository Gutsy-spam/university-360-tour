import React from 'react';
import './nrf.css';

const NIRF = () => {
  return (
    <div className="nirf-container">
      <h1>NIRF</h1>
      <h2>Directorate of Internal Quality Assurance:</h2>
      <h1>NIRF - 2023</h1>
      <div className="nirf-links">
        <div className="pdf-link">
          <span className="bullet">1.</span>
          <a href="#">Overall DCS Report</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">2.</span>
          <a href="#">Law</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">3.</span>
          <a href="#">Management</a>
        </div>
        <h1>NIRF - 2022</h1>
        <div className="nirf-links">
        <div className="pdf-link">
          <span className="bullet">1.</span>
          <a href="#">Overall DCS Report</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">2.</span>
          <a href="#">Law</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">3.</span>
          <a href="#">Management</a>
        </div>
        <h1>NIRF - 2020</h1>
        <div className="nirf-links">
        <div className="pdf-link">
          <span className="bullet">1.</span>
          <a href="#">Overall DCS Report</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">2.</span>
          <a href="#">Law</a>
        </div>
        <div className="pdf-link">
          <span className="bullet">3.</span>
          <a href="#">Management</a>
        </div>
        {/* Add more links as needed */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default NIRF;
