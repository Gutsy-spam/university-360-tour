import React from 'react';
import './guest.css';

const GuestHouse = () => {
  return (
    <div className="guest-container">
      <h1>Guest House</h1>
      <p>
        University Guest House, one of the important constituents of the University, came into being in April 1981 with a humble beginning of 5 rooms.
        But over the years, it expanded itself and added 18 rooms to its building. It is situated just opposite the Law department with state-of-the-art
        5 VVIP air-conditioned rooms with facilities like refrigerator, television, telephone, and attached washrooms, 7 VVIP air-conditioned rooms with
        television, telephone, and attached washrooms, and another 12 air-cooled rooms with television and attached washrooms. The main dining hall situated
        on the ground floor has a sitting capacity of 25 chairs and can house a gathering of more than 50 people in a buffet system, with hand drying
        facilities, cool, aqua clean E. boiled drinking water, and round-the-clock kitchen facility. The front office works 24*7 with cab, ambulance, etc.,
        just a phone call away. The main meeting/conference hall can accommodate up to 30 people at a time. It is equipped with necessary audiovisual aids as well.
      </p>
      <div className="guest-images">
        <div className="image-caption">
          <img src="images/g-house1.jpg" alt="Guest House" />
          <p>Guest House</p>
        </div>
        <div className="image-caption">
          <img src="images/g-house2.jpg" alt="Drive Way" />
          <p>Drive Way</p>
        </div>
      </div>
      <p>
        Guest House environment is equally techno-savvy with Internet facility round the clock for its guests, light music to soothe the senses, beautiful and
        well-maintained lawns to sip tea and relax. Housekeeping staff is available to the guests 24*7 making sure that all the rooms are furnished with clean
        bedding and washrooms furnished with clean towels/toiletries, etc. Guest House also arranges lunches, dinners & tea parties for the University Departments,
        as and when required and it has full 24-hour power backup. Guests are assured the best possible hospitality and service all the times.
      </p>
      <div className="guest-images">
        <div className="image-caption">
          <img src="images/sideGuestHouse.jpg" alt="Front Lawns" />
          <p>Front Lawns</p>
        </div>
        <div className="image-caption">
          <img src="images/w_hall.jpg" alt="Waiting Hall" />
          <p>Waiting Hall</p>
        </div>
      </div>
      <div className="guest-images">
        <div className="image-caption">
          <img src="images/bedroom.jpg" alt="Bedroom 1" />
          <p>Bedroom 1</p>
        </div>
        <div className="image-caption">
          <img src="images/bedroom2.jpg" alt="Bedroom 2" />
          <p>Bedroom 2</p>
        </div>
      </div>
      <div className="guest-images">
        <div className="image-caption">
          <img src="images/internet.jpg" alt="Upgoing Stairs" />
          <p>Upgoing Stairs</p>
        </div>
        <div className="image-caption">
          <img src="images/lobby.jpg" alt="Lobby" />
          <p>Lobby</p>
        </div>
      </div>
      <p>
        For reservations, please contact:
        <br />
        Manager, Guest House
        <br />
        University of Jammu
        <br />
        Ph.- 0191-2437127
        <br />
        University Exchange No. 0191-2435248, 2435259, 2453544 (Ext. 2576, 2577)
      </p>
    </div>
  );
};

export default GuestHouse;
