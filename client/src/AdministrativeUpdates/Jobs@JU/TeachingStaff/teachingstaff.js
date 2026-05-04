import React from 'react';

const TeachingStaff = () => {
  return (
    <div className="teaching-staff-container">
      <h1>Teaching Staff</h1>
      <div className="teaching-staff-content">
        <ul>
          <li>
            <a href="pdf_links_here" target="_blank" rel="noopener noreferrer">
              Advertisement No. Adm/TW/C&R/23/311 dated 09-06-2023 1
              <img src="images/new14.gif" alt="New" className="icon" />
            </a>
            <a href="https://jammurec.samarth.edu.in/" target="_blank" rel="noopener noreferrer">Click here for online form submission</a>
            (Extension Notice: Last date extended up to 15-07-2023)
          </li>
          <li>
            <a href="pdf_links_here" target="_blank" rel="noopener noreferrer">
              Online/ Offline applications invited for various teaching posts (Advertisement No Adm/TW/C&R/22/287-300 dated 22-08-2022), JU
            </a>
            (Extension Notice: Last date extended up to 10-12-2022)
          </li>
          {/* Add more PDF links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default TeachingStaff;
