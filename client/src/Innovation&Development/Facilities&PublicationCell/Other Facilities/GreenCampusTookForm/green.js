// Green.js

import React from 'react';
import './green.css';

const Green = () => {
  return (
    <div className="Green-container">
      <h1>Green Initiatives</h1>
      <ul>
        <li>
          About <a href="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/About%20GCTF-JU.pdf" target="_blank" rel="noopener noreferrer">GCTF-JU</a>
        </li>
        <li>
          Environmental Policy of University of Jammu <a href="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/Environment%20Policy%2C%20JU.pdf" target="_blank" rel="noopener noreferrer">pdf</a>
        </li>
        <li>
          E-waste Policy of University of Jammu <a href="https://www.jammuuniversity.ac.in/sites/default/files/inline-files/E-Waste%20Policy%2C%20JU.pdf" target="_blank" rel="noopener noreferrer">pdf</a>
        </li>
      </ul>
    </div>
  );
};

export default Green;
