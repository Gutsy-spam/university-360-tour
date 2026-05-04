import React from 'react';
import './Universitycouncil1.css'; // Import the CSS file for styling

const UniversityCouncil1 = () => {
  return (
    <div className="university-council-container">
      <h1>University Council</h1>
      <p>
        Pursuant to the provisions of sub-section (1) of Section 21 of the Kashmir and Jammu Universities Act 1969.
      </p>
      <p>University Council for the triennial period 2021-2024</p>

      <h3>Ex-Officio Members:</h3>
      <ul>
        <li>The Chancellor</li>
        <li>The Pro-Chancellor</li>
        <li>The Education Minister</li>
        <li>The Vice-Chancellor, University of Jammu</li>
        <li>The Vice-Chancellor, University of Kashmir</li>
        <li>The Pro-Vice-Chancellor, if any</li>
        <li>The Administrative Secretary to Government Planning and Development Department</li>
        <li>The Financial Advisor</li>
        <li>
          The Education Advisor to the Govt. or the Officer designated by the Govt. to the Incharge of Higher Education
        </li>
      </ul>

      <h3>Members Nominated by the Chancellor:</h3>
      <ul>
        <li>
          Two Deans of the Faculties of the University:
          <ul>
            <li>Dean, Faculty of Law, University of Jammu</li>
            <li>Dean, Faculty of Medical Sciences & Principal, Govt. Medical College Jammu</li>
          </ul>
        </li>
        <li>
          One Principal of an affiliated/constituted College of the University:
          <ul>
            <li>Principal, Govt. Degree College, Samba</li>
          </ul>
        </li>
        <li>
          Two members of the teaching staff belonging either to the University or its Constituent/affiliated Colleges:
          <ul>
            <li>President, Jammu University Teachers Association (JUTA)</li>
            <li>President, College Teacher Association (CTA), Jammu Wing</li>
          </ul>
        </li>
        <li>
          Two Nominees of the Chancellor:
          <ul>
            <li>Prof. Alok Kumar Rai, Vice Chancellor Lucknow University</li>
            <li>Prof. A.K Kaul, Department of Sociology, Banaras Hindu University, Varanasi</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default UniversityCouncil1;
