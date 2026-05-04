import React from 'react';
import './VisionMission.css'; // Import the CSS file for styling

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <h1>Vision & Mission</h1>
      <div className="content-container">
        <div className="vision">
          <h2>Vision</h2>
          <p>
            The University of Jammu strives to be an institution of excellence in higher education that:
          </p>
          <ul>
            <li>Constantly responds to changing social realities through the creation and application of knowledge.</li>
            <li>Contributes towards a pupil-centered and just society that nurtures innovation, protects dignity, and ensures equality.</li>
            <li>Aims at holistic development of students to face the challenges of the globalized world.</li>
          </ul>
        </div>
        <div className="mission">
          <h2>Mission</h2>
          <p>From darkness to light......</p>
          <p>
            To become an innovative knowledge institution with the capacity to meet the knowledge challenges of the 21st century
            and contribute towards the transformation of Jammu and Kashmir into a peaceful and prosperous state with balanced socio-cultural
            and economic development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
