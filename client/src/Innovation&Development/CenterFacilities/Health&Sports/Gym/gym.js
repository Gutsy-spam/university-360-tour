import React from 'react';
import './gym.css';

const Gym = () => {
  return (
    <div className="gym-container">
      <h1>Fitness</h1>
      <div className="gym-images">
        <div>
          <img src="images/gym1.jpg" alt="" />
          <p className="gym2-caption">Fitness Gym I</p>
        </div>
        <div>
          <img src="images/gym2.jpg" alt="" />
          <p className="gym3-caption">Fitness Gym II</p>
        </div>
        <div>
          <img src="images/gym3.jpg" alt="" />
          <p className="gym-caption">Fitness Gym III</p>
        </div>
      </div>
    </div>
  );
};

export default Gym;
