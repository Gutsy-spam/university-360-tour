import React from "react";
import "./logo02.css";

function Logo02() {
  return (
    <>
    <div className="main-header">
      <div className="name">
        <img src="images/0logo.png" alt="logo" />
        <div className="hindi-name">
          <h1 className="jammu">जम्मू विश्वविद्यालय</h1>
          <h1 className="eng-name">UNIVERSITY OF JAMMU</h1>
          <p>
            NAAC ACCREDITED "A+" (CGPA:3.51) NIRF RANKING <br /> 2023: 63RD RANK
            UNDER UNIVERSITY CATEGORY{" "}
          </p>
        </div>
      </div>

      <div className="header">
        <div className="g20img">
          <a
            href="https://www.g20.org/en/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="images/g20logo.png" alt="logo" />
          </a>
        </div>

        <div className="location-container">
          <p>
            <a
              className="styled-link"
              href="https://www.google.com/maps/dir//University+Of+Jammu,+Baba+Saheb+Ambedkar+Road,+University+of+Jammu,+Gujarbasti,+Jammu,+Jammu+and+Kashmir+180006/@32.6788001,74.8905063,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x391e849955a0d7cf:0x1a5dc7b412505c64!2m2!1d74.868063!2d32.71937!3e0?entry=ttu"
              target="_blank"
              rel="noreferrer noopener"
            >
              University of Jammu, Baba Saheb Ambedkar Road, Jammu Tawi
              (J&K)-180006 (INDIA){" "}
            </a>
          </p>

          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Logo02;
