import React, { useState, useEffect } from "react";
import axios from "axios";
import "./announcement&noti.css";

const AnnouncementsNotifications = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/announcements/category/Announcements%20&%20Notices")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the announcements:", error);
      });
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = announcements.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="wrapper">
    <div className="announcements-notifications-container">
      <h2>Announcements & Notifications</h2>
      {currentItems.map((announcement) => (
        
        <div key={announcement._id} className="announcement-card">
             <a href={announcement.pdfLink} target="_blank" rel="noopener noreferrer">
          <h3>{announcement.title}</h3>
          <p>{announcement.description}</p>
          <span>{new Date(announcement.date).toLocaleDateString()}</span>
          </a>
        </div>
      ))}

      <div className="pagination">
        {[...Array(Math.ceil(announcements.length / itemsPerPage)).keys()].map(
          (number) => (
            <span key={number} onClick={() => handlePageClick(number + 1)}>
              {number + 1}
            </span>
          )
        )}
      </div>
    </div>
    </div>
  );
};

export default AnnouncementsNotifications;
