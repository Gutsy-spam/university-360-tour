import React from 'react';
import './Notification1.css';

const Notification1 = () => {
  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <ul className="notifications-list">
        <li><a href="/pdfs/Notification1.pdf">Notification: Continuation of the existing syllabi and courses of study in Dogri of Sem 1st and 2nd for FYUGP under CBCS for the failure and Re-appear Candidates</a></li>
        <li><a href="/pdfs/Notification2.pdf">Notification: Remote Sensing and GIS for Master Degree Programme for sem Ist to IVth under CBCS for failure and Re-appear candidates.</a></li>
        {/* Add other PDF links here */}
      </ul>
    </div>
  );
};

export default Notification1;
