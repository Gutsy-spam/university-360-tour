import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todays-orders.css";

const AnnouncementsNotifications = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("both");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const circulars = await axios.get("http://localhost:5000/api/announcements/category/Circular");
        const orders = await axios.get("http://localhost:5000/api/announcements/category/Order");
        
        const combinedData = [...circulars.data, ...orders.data];
        const sortedData = combinedData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const filteredData = data.filter(item => {
    if (filter === "both") return true;
    return item.category === filter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="wrapper">
      <div className="announcements-notifications-container">
        <h2>Circulars & Orders</h2>

        <div className="filter-section">
          <label><input type="radio" name="filter" value="both" checked={filter === "both"} onChange={(e) => setFilter(e.target.value)} /> Both</label>
          <label><input type="radio" name="filter" value="Circular" checked={filter === "Circular"} onChange={(e) => setFilter(e.target.value)} /> Circulars</label>
          <label><input type="radio" name="filter" value="Order" checked={filter === "Order"} onChange={(e) => setFilter(e.target.value)} /> Orders</label>
        </div>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>pdf</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => (
              <tr key={item._id}>
              
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.category}</td>
                <td> <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">Link </a></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(number => (
            <span key={number} onClick={() => setCurrentPage(number + 1)}>
              {number + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsNotifications;
