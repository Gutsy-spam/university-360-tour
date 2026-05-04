import React from 'react';
import './syndicate.css'; // Import the CSS file for styling

const syndicate = () => {
  return (
    <div className="syndicate-container">
      <h1>University Syndicate</h1>
      <p>Syndicate of the University for the triennial period 2021-2024</p>

      <h3>Ex-Officio Members:</h3>
      <ul>
        <li>The Vice-Chancellor</li>
        <li>The Pro-Vice-Chancellor, if any</li>
        <li>
          The Educational Advisor to the Govt. or the Officer designated by the Govt. to be in charge of Higher Education
        </li>
        <li>The Financial Advisor</li>
        <li>
          <h3>Two Deans of the Faculties of the University by rotation to be nominated by the Vice-Chancellor:</h3>
          <ul>
            <li>Dean, Faculty of Social Sciences, University of Jammu</li>
            <li>Dean, Faculty of Life Sciences, University of Jammu</li>
          </ul>
        </li>
        <li>
          <h3>Two Deans of the Faculties of the other University by rotation to be nominated by the Chancellor:</h3>
          <ul>
            <li>Dean, School of Business Studies, University of Kashmir</li>
            <li>Dean, School of Arts, Literature & Languages, University of Kashmir</li>
          </ul>
        </li>
        <li>
          <h3>Two Principals of affiliated/constituted Colleges by rotation to be nominated by the Vice-Chancellor:(To be notified later)</h3>
        </li>
        <li>
          <h3>One Member of The Academic Council of the University concerned elected by the Council from amongst its members:
          (To be notified later)</h3>
        </li>
        <li>
        <h3>Two Members of The Syndicate for the other University elected by that body:</h3>
          <ul>
            <li>Dean, School of Applied Sciences & Technology, University of Kashmir</li>
            <li>Prof. Yasmeen Kawoos, Dean School of Education, University of Kashmir</li>
          </ul>
        </li>
        <li>
        <h3>Three nominees of the Chancellor at least one of whom shall be a woman connected with academic life:</h3>
          <ul>
            <li>Prof. (Dr.) Sunita Singh Sen Gupta, Faculty of Management Studies, University of Delhi</li>
            <li>Prof. Chandra Bhushan Sharma, School of Education, IGNOU New Delhi</li>
            <li>Prof. J.P Pandey, Director, Kamla Nehru Institute of Technology, Sultanpur</li>
          </ul>
        </li>
      </ul>

      <p>
        The aforesaid members shall resume their membership from the date the University Council is constituted and
        notified for the triennial period 2021-24
      </p>
    </div>
  );
};

export default syndicate;
