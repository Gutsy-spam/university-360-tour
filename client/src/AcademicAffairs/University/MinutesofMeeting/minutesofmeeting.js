import React from 'react';
import './minutesofmeeting.css'; // Import the CSS file for styling

const MinutesOfMeeting = () => {
  const meetingData = [
    {
      title: '87th meeting of the University Council (NOTIFICATION 04 OF 2023)',
      date: 'Wednesday, June 7, 2023',
      pdfLink: 'https://example.com/pdf-link-1.pdf',
    },
    {
      title: '87th meeting of the University Council (NOTIFICATION 03 OF 2023)',
      date: 'Wednesday, June 7, 2023',
      pdfLink: 'https://example.com/pdf-link-2.pdf',
    },
    // Add more meeting objects with title, date, and pdfLink
  ];

  return (
    <div className="minutes-of-meeting-container">
      <h1>Minutes of Meeting</h1>
      <ul>
        {meetingData.map((meeting, index) => (
          <li key={index}>
            <span className="meeting-title">{meeting.title}</span>
            <span className="meeting-date">{meeting.date}</span>
            <a href={meeting.pdfLink} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinutesOfMeeting;
