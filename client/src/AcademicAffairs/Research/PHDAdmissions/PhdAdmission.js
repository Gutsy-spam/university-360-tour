// PhDAdmissions.js

import React from 'react';
import './PhdAdmission.css'
const PhDAdmission = () => {
  const handleAdmissionFormClick = () => {
    window.location.href = 'https://www.coeju.com/';
  };

  return (
    <div className="phd-admissions">
      <h1>PhD Admissions</h1>
      <div className="content">
        <h2>PhD Admission 2023</h2>
        <p>
          Notification (PhD) <a href="path_to_pdf_file">(pdf)</a>
        </p>
        <a href="https://www.coeju.com/" onClick={handleAdmissionFormClick}>
          Admission Form
        </a>
        <p>
          Note: For any queries regarding admission to PhD, contact 0191-2458652 (Dean Research
          Studies)
        </p>
      </div>
    </div>
  );
};

export default PhDAdmission;
