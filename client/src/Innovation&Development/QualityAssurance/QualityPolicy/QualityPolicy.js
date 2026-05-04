import React from 'react';
import './QualityPolicy.css';

const QualityPolicy = () => {
  return (
    <div className="quality-policy-container">
      <h1>Quality Policy</h1>
      <h2>Directorate of Internal Quality Assurance:</h2>
      <div className="image-container">
        <img src="/images/policy_2015.jpg" alt="" />
      </div>
      <p>
        Add your quality policy statement here. This is a brief description of the organization's
        commitment to providing quality services or products. It should reflect the core values and
        principles that the organization follows to achieve its quality objectives.
      </p>
    </div>
  );
};

export default QualityPolicy;
