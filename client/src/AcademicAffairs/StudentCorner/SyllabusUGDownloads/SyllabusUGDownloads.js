import React from 'react';
import './SyllabusUGDownloads.css';

const SyllabusUGDownloads = () => {
  return (
    <div className="syllabus-container">
      <h1>Syllabus UG Downloads</h1>
      <ul className="syllabus-list">
        <li><a href="/pdfs/BScNursingSyllabus.pdf">Under Graduate Syllabus (CBCS/Non-CBCS)</a></li>
        <li><a href="/pdfs/CorrigendumUCATE605.pdf">Corrigendum: Course Code. UCATE-605 B.A/B.SC Computer Application of Semester VI under CBCS</a></li>
        {/* Add other PDF links here */}
      </ul>
    </div>
  );
};

export default SyllabusUGDownloads;
