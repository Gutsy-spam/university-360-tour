import React from 'react';
import './anjli.css';

const Anjli = () => {
  return (
    <div className="anjli-container">
      <h1 className="anjli-heading">Vidyanjali Report</h1>
      <div className="pdf-link">
        <a href="link-to-your-pdf.pdf" target="_blank" rel="noopener noreferrer">Download PDF Report</a>
      </div>
      <div className="youtube-video">
        <iframe
          title="Vidyanjali Report Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-youtube-video-id"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Anjli;
