import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Announcements.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/announcements/category/Announcements%20&%20Notices"
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="notice-section">
      <div className="announcement-container">
        <h1>
          <span>Announcement</span> & Notifications
        </h1>
        <div className="notice-box">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement1">
              <a href={announcement.pdfLink} target="_blank" rel="noopener noreferrer">
                 <p className="pNotice">
                <strong>{announcement.title}:</strong> {announcement.description}
                <span className="timestamp">
                  Posted on {new Date(announcement.date).toLocaleDateString()}
                </span>
              </p>   </a>
            </div>
          ))}
        </div>
       
      </div>
      <Link to="/Announcements&Notifications" className="notice-button">See All Announcements & Notices</Link>
    </div>
    
  );
};

export default Announcements;
