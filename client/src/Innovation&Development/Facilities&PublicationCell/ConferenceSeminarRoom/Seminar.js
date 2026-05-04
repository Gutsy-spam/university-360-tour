import React from 'react';
import './Seminar.css';

const Seminar = () => {
  return (
    <div className="Seminar-container">
      <h1>Conference / Seminar Rooms</h1>
      <p>
        The University of Jammu regularly keeps on holding National & International level conferences and seminars on various themes and disciplines. In order to cater to the diverse needs of the participants and the presenters, the University of Jammu hosts a number of seminar and conference halls. The seminar hall in the Vice-Chancellor's secretariat is an all-time favorite for holding interactions among a group of 50-70 people. Besides it, JU also holds conferences and seminars through video conferencing, which is housed in a hall to accommodate 30-40 persons.
      </p>
      <p>
        The Department of Computer Sciences & IT also hosts a spacious seminar hall which can accommodate 170 persons. The Department of Environmental Sciences has a round table seminar hall which can accommodate 120 persons. The Business School has also added a seminar hall in its block. This seminar hall has a seating capacity of 50-70 persons.
      </p>
      <img src="images/sideConferenceRoom.jpg" alt="" />
      <img src="images/sideSeminarRoom1.jpg" alt="" />
    </div>
  );
};

export default Seminar;
