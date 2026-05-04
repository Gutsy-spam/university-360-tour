import React from "react";
import "./about.css";

function card() {
  return (
    <div>
      <div className="about">
        <h5 className="abouttitle">About University of Jammu</h5>
        <p>
          <span>The University of Jammu strives for</span> Promoting
          preservation and integration of the cultural diversity of the region,
          state, and country achieving world-class excellence in teaching,
          research, and knowledge transfer and making valuable contributions...
        </p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default card;
