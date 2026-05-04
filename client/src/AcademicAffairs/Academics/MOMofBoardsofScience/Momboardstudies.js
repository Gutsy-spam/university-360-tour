import React from 'react';
import './Momboardstudies.css';
const Momboardstudies = () => {
  const handleOldMemoriesClick = () => {
    window.open('https://admin.jammuuniversity.ac.in/MOM_Boards.asp', '_blank');
  };

  return (
    <div className="mom-board-studies">
      <h1>Minutes of Meeting of Boards of Studies</h1>
      <div className="pdf-list">
        <ul>
          <li>
            <a href="path_to_pdf_file">Business Management (19-10-2020)</a>
          </li>
          <li>
            <a href="path_to_pdf_file">Hindi (07-08-2020)</a>
          </li>
          <li>
            <a href="path_to_pdf_file">Computer Science (22-01-2020)</a>
          </li>
          <li>
            <a href="path_to_pdf_file">Library Science (19-10-2020)</a>
          </li>
          {/* Add more PDF items here */}
        </ul>
      </div>
      <h4>For old minutes of meeting,</h4>
      <div className="old-memories">
        <a  href="https://admin.jammuuniversity.ac.in/MOM_Boards.asp" onClick={handleOldMemoriesClick}>
           click here
        </a>
      </div>
    </div>
  );
};

export default Momboardstudies;
