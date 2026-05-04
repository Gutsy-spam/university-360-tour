import React from "react";
import "./aboutcomp.css";

const aboutcomp = () => {
  return (
    <div className="dept-about">
      <div className="card-one">
        <h2>About Us</h2>
        <p>
          The Department of Botany Started in the University of
          Jammu with the initation of Diploma Course in computer science and
          applications in the year, 1987. The department started 3 years MCA
          (Six Semester) Course from the year, 1995. The MCA course is
          standardized and is representing 30 courses, five practical courses
          and one real life project be undertaken by the VIth Semester students
          in the reputed industries / institutions. The department has grown in
          the infrastructure in terms of space, hardware, software
          communications and manpower and is in process of growth as per rapidly
          changing technological developments. The students of this depart ment
          have found their placement in the global market. 
        </p>
        <button className="read-more-one">Read More</button>
      </div>

      <div className="card-two">
        <h2>Message</h2>

        <div className="dept-message">
          <img src="images/hritick.png" alt="logo" />
          <p>
            I welcome you again on the behalf of the Botany Department. aham bramhasmi.
            family today and growing at a rapid pace. We have a variety of
            students and young talents coming from all around India with a good
            mix of faculties from various fields of expertise making the
            department a place for quality research and teaching.
          </p>
        </div>

        <h1 className="dept-head">
          Head of Department | Computer Science & IT
        </h1>
        <button className="read-more-two">Read More</button>
      </div>
    </div>
  );
};

export default aboutcomp;
