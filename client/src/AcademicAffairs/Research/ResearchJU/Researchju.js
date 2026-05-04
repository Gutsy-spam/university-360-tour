import React from 'react';
import './Researchju.css'; // Import the new CSS file

const Researchju = () => {
  return (
    <div className="researchju-container">
      <div className="menu-researchju">
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
      <div className="content-researchju">
        <h1>Research @ JU</h1>
        <p>
          The office of Dean Research Studies was established in the Year 2011 in the University of Jammu under Research & Awards wing. The office is the centralized unit in the University of all research related activities including registration of students for Ph.D degrees and activities related to funded research projects. The office plays a vital role in making University of Jammu Research Intensive University in line with the vision of NEP, 2020. The research programs offered in the University range across many disciplines, imparting M.Phil/Ph.D in the following faculties:
        </p>
        <table className="table-researchju">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Faculty</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Arts</td>
              <td>Buddhist Studies, Dogri, Sanskrit, English, Urdu, Hindi, Punjabi</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Business Studies</td>
              <td>SHTM, Commerce, Management Studies, ICccR & HRM</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Education</td>
              <td>Education</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Law</td>
              <td>Law</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Life Sciences</td>
              <td>Botany, Zoology, Biotechnology, Environmental Sciences, Human Genetics</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mathematical Sciences</td>
              <td>Computer Science & IT, Mathematics, Statistics</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Science</td>
              <td>Chemistry, Electronics, Physics, Geology, Geography, Home Science, Remote Sensing & GIS</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Social Sciences</td>
              <td>Strategies & Regional Studies, CHCJLR, Economics, Sociology, Psychology, History, Political Science, Library Science, Centre for Studies in Museology</td>
            </tr>
          </tbody>
        </table>
        <div>
        <h3 className="h3-researchju">Main Activities</h3>
          <ul>
            <li>Issuance of Annual Research Calendar/Notifications for M.Phil/Ph.D Programs</li>
            <li>Registration of Students for Ph.D Program.</li>
            <li>Conduct of meetings of the Board of Research Studies in various faculties.</li>
            <li>Medals and Awards during Convocation</li>
            <li>Matter related to Research Projects awarded to faculty members</li>
            <li>Scholarship/Fellowship to M.Phil/Ph.D scholars</li>
            <li>Issue of MSP Certificates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Researchju;

