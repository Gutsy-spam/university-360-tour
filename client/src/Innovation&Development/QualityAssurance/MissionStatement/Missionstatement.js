import React from 'react';
import './Missionstatement.css';

const MissionStatement = () => {
  return (
    <div className="mission-container">
      <h1>Mission Statement</h1>
      <h2>Directorate of Internal Quality Assurance:</h2>
      <ol>
        <li>
          To become a nodal centre for ushering in an era of Total Quality Management by working out intervention
          strategies to remove deficiencies and enhance quality of the university and its affiliated colleges.
        </li>
        <li>
          To assure stakeholders connected with higher education namely, students, parents, teachers, staff, would-be
          employers, funding agencies and society in general-of the accountability of the institutions for their own
          quality and probity.
        </li>
        <li>
          To evolve mechanisms and procedures in the university for ensuring:
          <ul>
            <li>Economic and socio-political relevance of academic programmes, research programmes and consultancy projects undertaken in the university and other institutions of higher education in the region.</li>
            <li>Equitable access to and affordability of academic programmes for various sections of the society.</li>
          </ul>
        </li>
        <li>To develop and enrich the intellectual capital of the university affiliated colleges and other organisations of the region.</li>
      </ol>
    </div>
  );
};

export default MissionStatement;
