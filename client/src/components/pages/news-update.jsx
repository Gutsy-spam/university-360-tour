import React, { useState, useEffect } from "react";
import axios from "axios";
import "./news-update.css";

const NewsUpdate = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/announcements/category/News")
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="wrapper">
    <div className="news-update-container">
      <h2>News and Updates</h2>
     
      {currentItems.map((newsItem) => (
        <div key={newsItem._id} className="news-card">
             <a href={newsItem.pdfLink} target="_blank" rel="noopener noreferrer">
          <h3>{newsItem.title}</h3>
          <p>{newsItem.description}</p>
          <span>{new Date(newsItem.date).toLocaleDateString()}</span>
          </a>
        </div>
      ))}

      <div className="pagination">
        {[...Array(Math.ceil(newsData.length / itemsPerPage)).keys()].map(
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

export default NewsUpdate;
