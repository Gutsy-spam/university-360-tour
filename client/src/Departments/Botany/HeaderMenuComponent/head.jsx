import React from "react";
import "./head.css";

import { Link } from "react-router-dom";

const head = () => {
  return (
    <div className="main-header">
      <div className="name31">
        <img src="images/0logo.png" alt="logo" />
        <div className="hindi-name31">
          <h1 className="jammu31">जम्मू विश्वविद्यालय</h1>
          <h1 className="eng-name31">UNIVERSITY OF JAMMU</h1>
          <p>
            NAAC ACCREDITED "A+" (CGPA:3.51) NIRF RANKING <br /> 2023: 63RD RANK
            UNDER UNIVERSITY CATEGORY{" "}
          </p>
        </div>
        <div className="vertical-line"></div>
      </div>

      <div className="discipline">
        <h1 className="disc">Department of</h1>
        <h1 className="disc1">Botany</h1>
      </div>

      <div className="ul-bars">
        <ul>
            <li>About Us</li>
            <li>Programmes</li>
            <li>Faculty</li>
            <li>Phd. Students</li>
            <Link to="/">  <li><i class="fa-solid fa-house"></i></li></Link>
        </ul>
      </div>
    </div>
  );
};

export default head;
