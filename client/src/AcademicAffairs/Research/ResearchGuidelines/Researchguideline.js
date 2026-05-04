import React from 'react';
import './Researchguideline.css'; // Import the new CSS file

const Researchguideline = () => {
  return (
    <div className="researchguideline-container">
      <div className="menu-researchguideline">
        <h1>RESEARCH</h1>
        <ul>
          <li><a href="/">UNIVERSITY</a></li>
          <li><a href="/about">Dean Research Studies</a></li>
          <li><a href="/vision-mission">Research @ JU</a></li>
          <li><a href="/chancellor">Research Calendar</a></li>
          <li><a href="/chancellor">Research Guidelines</a></li>
          <li><a href="/chancellor">Research Projects</a></li>
          <li><a href="/chancellor">Statutes Governing PhD</a></li>
          <li><a href="/chancellor">PhD Admissions</a></li>
          <li><a href="/chancellor">List of PhD Scholars</a></li>
          <li><a href="/chancellor">Scholarships / Fellowships</a></li>
          <li><a href="/chancellor">MOUs</a></li>
          <li><a href="/chancellor">Downloads</a></li>
          <li><a href="/chancellor">Notifications</a></li>
          {/* Add more menu items here */}
        </ul>
      </div>
      <div className="content-researchguideline">
        <h1>Research Guidelines</h1>
        <p>All Research related guidelines...</p>

        {/* Add your PDF links here */}
        <p><a href="link-to-pdf1.pdf">University of Jammu Research Fund (UoJRF) Guidelines</a></p>
        <p><a href="link-to-pdf2.pdf">Trans-Disciplinary Research Scheme (TDRS) and TDRS Proforma</a></p>
        <p><a href="link-to-pdf3.pdf">Other PDF Link</a></p>
      </div>
    </div>
  );
};

export default Researchguideline;
