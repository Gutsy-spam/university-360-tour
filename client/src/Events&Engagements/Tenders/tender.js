import React, { useState } from 'react';
import './tender.css';

const TenderPage = () => {
  const [showOldTenders, setShowOldTenders] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Your tender data goes here
  // For demonstration purposes, I'm using a dummy data
  const tenders = [
    // Add your tender data here
  ];

  const totalItems = showOldTenders ? 6 * itemsPerPage : tenders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const handleViewOldTenders = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
      setShowOldTenders(false);
    } else {
      setCurrentPage(totalPages); // Redirect to last page (older tenders)
      setShowOldTenders(!showOldTenders);
    }
  };

  return (
    <div className="tender-page-container">
      <h1>Tenders:</h1>
      <table className="tender-table">
        <thead>
          <tr>
            <th>Tender Subject</th>
            <th>Opening date</th>
            <th>Closing date</th>
            <th>Contact Person</th>
            <th>Designation</th>
            <th>Email/Telephone</th>
            <th>Unit</th>
            <th>
              <pdf>Tender Document</pdf>
            </th>
          </tr>
        </thead>
        <tbody>
          {tenders.slice(startIndex, endIndex).map((tender, index) => (
            <tr key={index}>
              <td>{tender.subject}</td>
              <td>{tender.openingDate}</td>
              <td>{tender.closingDate}</td>
              <td>{tender.contactPerson}</td>
              <td>{tender.designation}</td>
              <td>{tender.contact}</td>
              <td>{tender.unit}</td>
              <td>
                <a href={tender.pdfLink} target="_blank" rel="noopener noreferrer">
                  {tender.pdf}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePaginationClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button className="view-old-tenders" onClick={handleViewOldTenders}>
        {showOldTenders && currentPage === totalPages ? 'View Current Tenders' : 'View Old Tenders'}
      </button>
    </div>
  );
};

export default TenderPage;
