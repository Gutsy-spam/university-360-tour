import React from 'react';
import './Campusmaps.css';

const Campusmaps = () => {
  return (
    <div className="Campusmaps-container">
      <h1>Campus Map</h1>
      <h3>The Campus:-</h3>
      <div className="image-container">
        <img src="images/sideCampusMap.jpg" alt="University Campus Map" />
        <div className="boundary"></div>
      </div>
      <div className="Campusmaps-details">
        <p>
          The beautiful campus of the University of Jammu is located in the City
          of Temples - Jammu Tawi. It has two campuses - New Campus at Bahu Wali
          Rakh, with an area of about 118.70 acres and another small old campus
          at Canal Road, having an area of 10.5 acres. Presently, in the old
          campus, only residential accommodation for teaching and non-teaching
          staff, and a boys' hostel are located. The New Campus is well laid and
          earmarked for different activities. It has residential accommodation
          for all types of University employees.
        </p>
        <p>
          The teaching departments are located in the main campus. There is a
          central library, an auditorium, canteens, a kiosk for photocopying,
          STD/ISD facilities, and other stationery items. In the campus, there
          is a bookshop, a bank, and a post office. There are canteens for
          refreshment at suitable places. For guests, there is a well-maintained
          Guest House within the campus. A sports complex and grounds for
          different games and activities constitute another important feature
          of the New Campus. A botanical and a cactus garden have since become
          star attractions on the campus. The University Executive Engineer and
          his establishment look after the construction and maintenance of the
          roads and buildings. There is a medical center with outdoor services
          under the overall supervision of CMO.
        </p>
      </div>
    </div>
  );
};

export default Campusmaps;
