// notifications.js

import React from 'react';
import './notifications.css';

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <p>Extension of date for submission of applications for PhD. programme under exempted category session 2023.</p>
      <a
        href="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/a11.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pdf-link"
      >
        View PDF
      </a>
    </div>
  );
};

export default Notifications;
