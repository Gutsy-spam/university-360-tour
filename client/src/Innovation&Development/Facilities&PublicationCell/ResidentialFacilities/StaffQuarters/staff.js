import React from 'react';
import './staff.css';

const StaffQuarters = () => {
  return (
    <div className="staff-container">
      <h1>Staff Quarters</h1>
      <p>
        The University of Jammu provides residential facilities for teaching and non-teaching employees on the campus.
        The accommodations are available on the new as well as old campus. In total, there are 224 housing units comprising
        of 89 units for the teachers and officers, 71 units for non-teaching employees, and 64 units for class IVth employees.
      </p>
      <div className="staff-images">
      <div className="staff-image-caption">
        <img src="images/sideResidential.jpg" alt="" />
        <p>Residential Complex-I</p>
        </div>
        <div className="staff-image-caption">
        <img src="images/sideResidential1.jpg" alt="" />
        <p>Residential Complex-II</p>
      </div>
      <div/>
    </div>
    </div>
  );
};

export default StaffQuarters;
