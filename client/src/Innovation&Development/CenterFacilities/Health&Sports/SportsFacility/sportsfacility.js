import React from 'react';
import './sportsfacility.css';

const Sportsfacility = () => {
  return (
    <div className="sportsfacility-container">
      <h1>Sports Facilities</h1>
      <div className="images-container">
        <div className="image-container">
          <img src="images/Tennis_court.jpg" alt="" />
          <div className="caption">Tennis Court</div>
        </div>
        <div className="image-container">
          <img src="images/football.jpg" alt="" />
          <div className="caption">Football Court</div>
        </div>
        <div className="image-container">
          <img src="images/VolleyBall.jpg" alt="" />
          <div className="caption">VolleyBall Court</div>
        </div>
        <div className="image-container">
          <img src="images/Play_Ground.jpg" alt="" />
          <div className="caption">PlayGround</div>
        </div>
      </div>
    </div>
  );
};

export default Sportsfacility;
