// Events.js

import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="event-buttons">
        <button className="past-events-btn">Past Events</button>
        <button className="present-events-btn">Present Events</button>
        <button className="upcoming-events-btn">Upcoming Events</button>
      </div>
      <div className="events-list">
        <ul>
          <li>
            <strong>Two Days National Seminar of 'Devinder Singh Vishavnagrik Da Viaktitav Ate Sahitak Drishti</strong>
            <br />
            Thursday, December 22, 2022
          </li>
          <li>
            <strong>Display your Talent (9th - 22nd Nov., 2022)</strong>
            <br />
            Wednesday, November 9, 2022
          </li>
          <li>
            <strong>Youth festival SANGAM-2022 at Bhaderwah from 31 Oct - 4 Nov 2022</strong>
            <br />
            Monday, October 31, 2022
          </li>
          <li>
            <strong>Foundation Day Celebration</strong>
            <br />
            Monday, September 5, 2022
          </li>
          <li>
            <strong>Prof. D. K. Rampal Memorial National Seminar (One Day) will be Organized by The Department of English, University of Jammu</strong>
            <br />
            Friday, July 29, 2022
          </li>
          <li>
            <strong>National Workshop on “Research Methodology for Social Sciences, Behavioural Sciences & Humanities”</strong>
            <br />
            Wednesday, July 20, 2022
          </li>
          <li>
            <strong>Three-day National Seminar on “Revisiting the life and legacy of Maharaja Gulab Singh”, (15th -17th June, 2022)</strong>
            <br />
            Wednesday, June 15, 2022
          </li>
          <li>
            <strong>Two days National Seminar on Maharaja Ranbir Singh and the making of the Princely state of Jammu and Kashmir</strong>
            <br />
            Tuesday, April 26, 2022
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Events;
