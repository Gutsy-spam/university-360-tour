import React from 'react';
import './canteen.css';

const Canteen = () => {
  return (
    <div className="Canteen-container">
      <h1>Canteen</h1>
      <p>
        There are two main cafeterias besides many corner canteens and eating points. One cafeteria is near the Science and Law blocks. The second cafeteria is housed in General Zorawar Singh Auditorium. Both cafeterias serve hygienic and quality food at competitive prices.
      </p>
      <img src="images/smallCafetaria.jpg" alt="Cafeteria 1" />
      <img src="images/audi-cafeteria.jpg" alt="Cafeteria 2" />
    </div>
  );
};

export default Canteen;
