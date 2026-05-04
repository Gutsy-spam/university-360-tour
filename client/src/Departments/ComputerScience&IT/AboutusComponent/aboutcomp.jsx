import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./aboutcomp.css";

const AboutComp = () => {
  const [aboutData, setAboutData] = useState({}); // Storing fetched data

  useEffect(() => {
    // Assuming the department name is 'CS&IT' for this example.
    // Change the URL if you have a different setup.
    axios.get('http://localhost:5000/api/departmentAbout/department/CSIT')
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
      });
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div className="dept-about">
      <div className="card-one">
        <h2>About Us</h2>
        <p>{aboutData.aboutText}</p>
        <button className="read-more-one">Read More</button>
      </div>

      <div className="card-two">
        <h2>Message</h2>
        <div className="dept-message">
          <img src={aboutData.hodMessage?.image || "defaultImageURL"} alt="HOD" />
          <p>{aboutData.hodMessage?.text}</p>
        </div>
        <h1 className="dept-head">
          Head of Department | Computer Science & IT
        </h1>
        <button className="read-more-two">Read More</button>
      </div>
    </div>
  );
};

export default AboutComp;
