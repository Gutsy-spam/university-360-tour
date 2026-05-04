import React from 'react';
import './sallabus.css';

const syllabusData = [
  {
    title: 'Syllabus of Entrance/ Screening Test for the post of Telephone Lineman, JU',
    link: '/pdf-link-1.pdf',
  },
  {
    title: 'Syllabus of written test for the post of Semi Professional Asstt, JU',
    link: '/pdf-link-2.pdf',
  },
  // Add more syllabus data items as needed
];

const Syllabus = () => {
  return (
    <div className="syllabus-container">
      <h1>Syllabus</h1>
      <div className="syllabus-content">
        {syllabusData.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
