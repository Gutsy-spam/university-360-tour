import React from 'react';
import './ugarchive.css';

const UGArchive = () => {
  return (
    <div className="ugarchive-container">
      <h1 className="ugarchive-heading">Awaiting for content</h1>
      <p className="ugarchive-text">The requested page could not be found.</p>
      <div className="ugarchive-image-container">
        <img src="images/page-under-construction.png" alt="Page Under Construction" className="ugarchive-image" />
      </div>
    </div>
  );
};

export default UGArchive;
