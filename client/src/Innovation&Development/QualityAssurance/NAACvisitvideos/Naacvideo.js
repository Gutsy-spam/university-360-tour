import React from 'react';
import './Naacvideo.css';

const NaacVideo = () => {
  return (
    <div className="naac-video-container">
      <h1>NAAC Visit Videos</h1>
      <h2>Directorate of Quality Assurance:</h2>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/watch?v=7uG-GA_PEmI"
          title="NAAC Video 1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/watch?v=8gB99RUTrLU"
          title="NAAC Video 2"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NaacVideo;
