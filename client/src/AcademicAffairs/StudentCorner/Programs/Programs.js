import React, { useState } from 'react';
import './Programs.css';

const Programs = () => {
  const [showDistanceEducationLink, setShowDistanceEducationLink] = useState(false);

  const handleDistanceEducationClick = () => {
    setShowDistanceEducationLink(true);
  };

  return (
    <div className="programs-container">
      <h1>Programs</h1>
      <p>
        Regular Programmes |{' '}
        {showDistanceEducationLink ? (
          <a href="http://distanceeducationju.in" target="_blank" rel="noopener noreferrer">
            Distance Education
          </a>
        ) : (
          <span onClick={handleDistanceEducationClick}>Distance Education</span>
        )}
      </p>
      <div className="regular-programs">
        <p><strong>Master Degree Programme in Bio-Technology:</strong></p>
        <p><strong>Master Degree Programme in Microbiology:</strong></p>
        <p><strong>Master Degree Programme in Biochemistry:</strong></p>
        <p><strong>Master Degree Programme in Botany:</strong></p>
        <p><strong>Master Degree Programme in Buddhist Studies:</strong></p>
        <p><strong>Master Degree Programme in Business Management:</strong></p><p><strong>Regular Programmes:</strong></p>
        <p><strong>Master Degree Programme in Chemistry:</strong></p>
        <p><strong>Master Degree Programme in Commerce:</strong></p>
        <p><strong>Master Degree Programme in Computer Application:</strong></p>
        <p><strong>Master Degree Programme in Dogri:</strong></p>
        <p><strong>Master Degree Programme in Economics:</strong></p>
        <p><strong>Master Degree Programme in Education:</strong></p>
        <p><strong>Master Degree Programme in Electronics:</strong></p>
        <p><strong>Master Degree Programme in Electronics:</strong></p>
        <p><strong>Master Degree Programme in English :</strong></p>
        <p><strong>Master Degree Programme in Environmental Sciences :</strong></p>
        <p><strong>Master Degree Programme in Geography :</strong></p>
        <p><strong>Master Degree Programme in Geology :</strong></p>
        <p><strong>Master Degree Programme in Hindi :</strong></p>
        <p><strong>Master Degree Programme in History :</strong></p>
        <p><strong>Master Degree Programme in Home Science :</strong></p>
        <p><strong> Master Degree Programme in Mathematics:</strong></p>
        <p><strong>Master Degree Programme in Physics:</strong></p>
        <p><strong>Master Degree Programme in Political Science:</strong></p>
        <p><strong>Master Degree Programme in Psychology:</strong></p>
        <p><strong>Master Degree Programme in Punjabi:</strong></p>
        <p><strong>Master Degree Programme in Sanskrit:</strong></p>
        <p><strong>Master Degree Programme in Sociology:</strong></p>
        <p><strong>Master Degree Programme in Statistics:</strong></p>
        <p><strong>Master Degree Programme in Tourism Management:</strong></p>
        <p><strong>Master Degree Programme in Urdu:</strong></p>
        <p><strong>Master Degree Programme in Urdu (Professional):</strong></p>
        <p><strong>Master Degree Programme in Zoology:</strong></p>
        <p><strong>Master Degree Programme in Human Genetics:</strong></p>
        <p><strong>Master Degree Programme in Sericulture:</strong></p><p><strong>Regular Programmes:</strong></p>
        <p><strong>Master Degree Programme in Information Technology:</strong></p>
        <p><strong>Master Degree Programme in Applied Geology:</strong></p>
        <p><strong>Master Degree Programme in Food Science& Technology:</strong></p>
        <p><strong>Master Degree Programme in Remote Sensing & GIS:</strong></p>
        <p><strong>Master Degree Programme in Clothing & Textiles:</strong></p>
        <p><strong>Master Degree Programme in Music:</strong></p>
        <p><strong>Master Degree Programme in Kashmiri:</strong></p>
        <p><strong>Master Degree Programme in Rural Development:</strong></p>
        <p><strong>L.L.B. (Professional):</strong></p>
        <p><strong>M.Ed:</strong></p>
        <p><strong>M.P. Ed:</strong></p>
        <p><strong>B.P. Ed:</strong></p>
        <p><strong>BA English (Honours):</strong></p>
        <p><strong>B. Com (Honours):</strong></p>
        <p><strong>BBA (Hotel Management):</strong></p>
        <p><strong>B.Lib.I. Sc:</strong></p>
        <p><strong>M.Lib.I.Sc:</strong></p>
        <p><strong>Post-Graduate Diploma in Business Management (BBM):</strong></p>
        <p><strong>Post-Graduate Diploma in Marketing & Sales Management:</strong></p>
        <p><strong>Post-Graduate Diploma in Banking & Risk Management:</strong></p>
        <p><strong>Post-Graduate Diploma in Accounting & Finance:</strong></p>
        <p><strong>Post-Graduate Diploma in Human Rights & Duties Education:</strong></p>
        <p><strong>Post-Graduate Diploma in Bioinformatics:</strong></p>
        <p><strong>Post-Graduate Course in Computer Applications:</strong></p>
        <p><strong>M. Phil.:</strong></p>
        <p><strong>Ph. D.:</strong></p>
      </div>
    </div>
  );
};

export default Programs;
