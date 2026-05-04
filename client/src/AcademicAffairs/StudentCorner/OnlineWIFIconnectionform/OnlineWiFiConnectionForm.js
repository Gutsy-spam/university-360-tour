// OnlineWiFiConnectionForm.js

import React from 'react';
import './OnlineWiFiConnectionForm.css';

const OnlineWiFiConnectionForm = () => {
  return (
    <div className="wifi-connection-container">
      <h1>Online WiFi Connection Form</h1>
      <p>
        To apply for a WiFi connection, please fill out the online form by clicking the link below:
      </p>
      <a
        className="wifi-form-link"
        href="https://example.com/wifi-connection-form"
        target="_blank"
        rel="noopener noreferrer"
      >
        WiFi Connection Form
      </a>
    </div>
  );
};

export default OnlineWiFiConnectionForm;
