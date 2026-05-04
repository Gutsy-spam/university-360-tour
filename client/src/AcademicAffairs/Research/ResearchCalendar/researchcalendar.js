// ResearchCalendar.js

import React from 'react';
import './researchcalendar.css';
const ResearchCalendar = () => {
  const researchCalendarPDF = 'https://www.jammuuniversity.ac.in/sites/default/files/inline-files/123.pdf'; // Replace with the actual path to the PDF file

  return (
    <div className="research-calendar">
      <h1>Research Calendar</h1>
      <div className="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/123.pdf">
        <a href={researchCalendarPDF} target="_blank" rel="noopener noreferrer">
          Research Calendar
        </a>
      </div>
    </div>
  );
};

export default ResearchCalendar;
