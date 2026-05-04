import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events");
        
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000
  
        const upcomingEvents = response.data.filter(event => new Date(event.date) >= currentDate);
        const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  
        setEvents(sortedEvents.slice(0, 5));
      } catch (error) {
        console.error(error.response.data);
      }
    };
  
    fetchEvents();
  }, []);
  return (
    <div className="upcoming-events-container">
      <h2>UPCOMING EVENTS</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <a href={event.link} target="_blank" rel="noopener noreferrer">{event.title}</a>
            <p className="date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="events">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
