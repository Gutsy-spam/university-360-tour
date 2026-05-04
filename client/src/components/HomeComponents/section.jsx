import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./section.css";

function Section() {
  const [newsData, setNewsData] = useState([]); // To hold the fetched news data
  useEffect(() => {
    // Fetching data when the component mounts
    axios
      .get("http://localhost:5000/api/announcements/category/News")
      
      .then((response) => {
        setNewsData(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []); // Empty dependency array means this useEffect will run once when the component mounts
  

  return (
    <div>
      <section className="updates1">
        <h1>
          <span>News</span> and Updates
        </h1>
        <ul>
          {newsData.map((newsItem) => (
            <li key={newsItem._id}>
              <a href="#">
                {newsItem.title} <br />
                
                <span>Published on: {new Date(newsItem.date).toLocaleDateString()}</span>
              </a>
            </li>
          ))}
        </ul>
        
      </section>
      <Link to="/News&Update" className="button2">Read More</Link>
    </div>
  );
}

export default Section;
