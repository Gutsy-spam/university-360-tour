import React from 'react';
import './faculties.css';
import { Link } from "react-router-dom";
const Faculties = () => {
  return (
    <>
    <h1 className='faculties-heading'>Faculties</h1>
    <div className='dept-faculties'>
      <div className="faculty1">
        <h1>Faculty of Life Sciences</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/biotechnology/introduction">School of Biotechnology</a></li>
          <li><Link to="/Botany">Department of Botany</Link></li>
          <li><a href="https://www.jammuuniversity.ac.in/environmental-science/introduction">Department of Environmental Science</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/zoology/introduction">Department of Zoology</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/human-genetics/introduction">Institute of Human Genetics</a></li>
        </ul>
      </div>

      <div className="faculty1">
        <h1>Faculty of Arts/Oriental Languages</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/buddhist-studies/introduction">Department of Buddhist Studies</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/dogri/introduction">Department of Dogri</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/english/introduction">Department of English</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/hindi/introduction">Department of Hindi</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/punjabi/introduction">Department of Punjabi</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/sanskrit/introduction">Department of Sanskrit</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/urdu/introduction">Department of Urdu</a></li>
          <li><a href="https://jammuuniversity.ac.in/DJMS/Introduction">Department of Journalism and Media Studies</a></li>
        </ul>
      </div>
      <div className="faculty1">
        <h1>Faculty of Sciences</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/chemistry/introduction">Department of Chemistry</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/geology/introduction">Department of Geology</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/geography/introduction">Department of Geography</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/home-science/introduction">Department of Home Science</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/physics/introduction">Department of Physics</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/electronics/introduction">Department of Electronics</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/remote-sensing-gis/introduction">Department of Remote Sensing & GIS</a></li>
        </ul>
      </div>

      <div className="faculty1">
        <h1>Faculty of Education</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/education/introduction">Department of Education</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/physical-education/introduction">Department of Physical Education</a></li>
        </ul>
      </div>


      <div className="faculty1">
        <h1>Faculty of Business Studies</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/business-school/introduction">The Business School</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/shtm/introduction">School of Hospitality & Tourism Management</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/icccrhrm/introduction">International Centre for Cross Cultural Research and Human Resource Management</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/commerce/introduction">Department of Commerce</a></li>
        </ul>
      </div>

      <div className="faculty1">
        <h1>Faculty of Mathematical Science</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/mathematics/introduction">Department of Mathematics</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/statistics/introduction">Department of Statistics</a></li>
          <li><Link to="/CS&IT">Department of Computer Science & IT</Link></li>
        </ul>
      </div>

      <div className="faculty1">
        <h1>Faculty of Law</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/law/introduction">Department of Law</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/lawschool/introduction">The Law School</a></li>
        </ul>
      </div>

      <div className="faculty1">
        <h1>Faculty of Social Science</h1>
        <ul>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/economics/introduction">Department of Economics</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/history/introduction">Department of History</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/political-science/introduction">Department of Political Science</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/library-information-science/introduction">Department of Library and Information Science</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/psychology/introduction">Department of Psychology</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/strategic-regional-studies/introduction">Department for Strategic and Regional Studies</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/sociology/introduction">Department of Sociology</a></li>
          <li><a href="https://www.jammuuniversity.ac.in/index.php/lifelonglearning/introduction">Department of Lifelong Learning</a></li>
        </ul>
      </div>

      <div className="faculty31">
        <h1>Faculty of Medicine</h1>
      </div>

      
        <h1>Faculty of Engineering</h1>
      

      
        <h1>Faculty of Music and Fine Arts</h1>
      
    </div>
    </>
  );
};

export default Faculties;
