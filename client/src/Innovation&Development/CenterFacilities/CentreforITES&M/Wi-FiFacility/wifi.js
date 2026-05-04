import React from 'react';
import './wifi.css';

const Wifi = () => {
  return (
    <div className="wifi-container">
      <h1>Wi-Fi Facility</h1>
      <h2>JU Wi-Fi Highlights</h2>
      <ul>
        <li>Wi-Fi Campus Network covers the entire campus, including all buildings and outer surroundings</li>
        <li>Seamless Roaming facility</li>
        <li>24/7 Availability</li>
        <li>802.11g/b/n/ac/ax protocol used</li>
      </ul>
      <strong>Measures for Cyber Security in University of Jammu</strong>
      <p>
        University of Jammu installed SOPhos XG750 UTM firewall Device with the following features:
      </p>
      <ol>
        <li>Web & application Protection: control over all user’s web and application activity.</li>
        <li>Provides enterprise-level Secure Web Gateway policy controls to easily manage sophisticated user and group web controls.</li>
        <li>Enables user-aware visibility and control over thousands of applications with granular policy and traffic-shaping (QoS) options based on application category, risk, and other characteristics.</li>
        <li>Provides protection from the latest spam campaigns, phishing attacks, and malicious attachments.</li>
        <li>Load balancing.</li>
        <li>Firewall rules: You can allow or disallow traffic flow between zones and networks based on the matching criteria. You can implement policies, specify access for endpoint devices and servers, and prioritize traffic.</li>
        <li>Frames User authentication Policy.</li>
      </ol>
    </div>
  );
};

export default Wifi;
