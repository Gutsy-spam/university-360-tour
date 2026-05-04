// StatutesPage.js

import React from 'react';
import './statuesphdmphil.css';
const StatutesPage = () => {
  const statutesPDF = 'https://www.jammuuniversity.ac.in/sites/default/files/inline-files/Brochure_0.pdf'; // Replace with the actual path to the PDF file

  return (
    <div className="statutes-page">
      <h1>Statutes Governing Mphil/PhD</h1>
      <div className="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/Brochure_0.pdf">
        <a href={statutesPDF} target="_blank" rel="noopener noreferrer">
          Statutes Governing Mphil / PhD (pdf)
        </a>
      </div>
    </div>
  );
};

export default StatutesPage;
