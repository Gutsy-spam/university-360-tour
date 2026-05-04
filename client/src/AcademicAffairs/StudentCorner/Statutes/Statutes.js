// Statutes.js

import React from 'react';
import './Statutes.css';

const Statutes = () => {
  return (
    <div className="statutes-container">
      <h1>Statutes</h1>
      <div className="statutes-links">
        <ul>
          <li><a href="link_to_pdf">Statutes and Scheme for Executive -MBA Programme (Self Financing) to be offered by The Business School, University of Jammu.</a></li>
          <li><a href="link_to_pdf">Statutes/Rules of Examination of Bachelor of Architecture(B.Arch) applicable to both Non-CBCS and CBCS</a></li>
          <li><a href="link_to_pdf">Statutes for Introduction of MDP in Punjabi and, one year Diploma in Gyani in the DD & OE</a></li>
          <li><a href="link_to_pdf">Statutes for Master's Degree Programme in Education (Self Financing) in the Directorate of Distance & Online Education (DD&OE)</a></li>
          <li><a href="link_to_pdf">Statutes for Bachelor of Visual Arts(Painting, Sculpture, Applied Art and Art History and Aesthetics)</a></li>
          <li><a href="link_to_pdf">Statutes of B.Pharmacy</a></li>
          {/* More links... */}
        </ul>
      </div>
    </div>
  );
};

export default Statutes;
