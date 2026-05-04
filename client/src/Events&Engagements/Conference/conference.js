// conference.js

import React, { useState } from 'react';
import './conference.css';

const Conference = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="conference-container">
      <div className="tabs">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Present Conference
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Upcoming Conference
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Past Conference
        </button>
      </div>
      <div className="pdf-container">
        {activeTab === 1 && (
          <iframe
            title="Conference 1 PDF"
            src="https://www.jammuuniversity.ac.in/conferences/past-conference"
            frameBorder="0"
          />
        )}
        {activeTab === 2 && (
          <iframe
            title="Conference 2 PDF"
            src="https://www.jammuuniversity.ac.in/conferences/past-conference"
            frameBorder="0"
          />
        )}
        {activeTab === 3 && (
          <iframe
            title="Conference 3 PDF"
            src="https://www.jammuuniversity.ac.in/conferences/past-conference"
            frameBorder="0"
          />
        )}
      </div>
    </div>
  );
};

export default Conference;
