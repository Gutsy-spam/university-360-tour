import React from 'react';
import './SyllabusUGNEPDownload.css';

const SyllabusUGNEPDownload = () => {
  return (
    <div className="syllabus-container">
      <h1>Syllabus UG-NEP Downloads</h1>
      <ul className="syllabus-list">
        <li><a href="/pdfs/StatutesFourYearUGP.pdf">Statutes of the Four Year Under Graduate Programme</a></li>
        <li><a href="/pdfs/AmendmentStatute40.pdf">Amendment in Statute-40</a></li>
        {/* Add other PDF links here */}
      </ul>
    </div>
  );
};

export default SyllabusUGNEPDownload;

