// press.js

import React from 'react';
import './press.css';

const PressRelease = () => {
  const pressReleases = [
    {
      title: 'National Science Day and Rare Disease Day on 28th February',
      date: 'Tuesday, February 28, 2023',
      pdfLink: '/path/to/national_science_day.pdf',
    },
    {
      title: 'DLL- SAI Training Centre organise workshop on sexual harassment at JU',
      date: 'Monday, July 29, 2019',
      pdfLink: '/path/to/workshop_sexual_harassment.pdf',
    },
    {
      title: 'Five days Induction Programme of 2019-2022 batch started at The Business School, JU',
      date: 'Monday, July 22, 2019',
      pdfLink: '/path/to/induction_programme.pdf',
    },
    // Add more press releases with their respective details
  ];

  return (
    <div className="press-release-container">
      <h1>Press Release</h1>
      <ul className="press-list">
        {pressReleases.map((release, index) => (
          <li key={index}>
            <span className="press-title">{release.title}</span>
            <span className="press-date">{release.date}</span>
            <a className="pdf-link" href={release.pdfLink} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PressRelease;
