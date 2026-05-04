import React from 'react';
import './Chancellor.css'; // Import the CSS file for styling

const Chancellor = () => {
  return (
    <div className="chancellor-container">
      <div className="image-container">
      <img src="images/Chancellor_1.jpg" alt="" />
        <div className="boundary"></div>
      </div>
      <div className="chancellor-text">
        <h2>Hon'ble Chancellor</h2>
        <h3>Sh. Manoj Sinha</h3>
      </div>
      <div className="chancellor-details">
        <p>
          Sh. Manoj Sinha, the Hon'ble Chancellor of the University of Jammu, is the second Lieutenant Governor of the Union territory of Jammu & Kashmir.
          A seasoned Politician from Uttar Pradesh, he is a trained Civil Engineer with Degrees of B.Tech and M-Tech from IIT(BHU) Varanasi.
          Mr. Manoj Sinha is a three-time Member of Parliament. He became MP for the first time in 1996 and then in 1999 and 2014.
          During his third term in 2014, he was appointed as the Minister of State for Railways and in 2016, served as the Union Minister of State(Independent Charge) of the Ministry of Communication, Govt. of India.
        </p>
        <p>
          Sh. Manoj Sinha took charge as the Lieutenant Governor of Jammu and Kashmir on 7th of August, 2020 at Raj Bhavan, Srinagar.
        </p>
      </div>
    </div>
  );
};

export default Chancellor;
