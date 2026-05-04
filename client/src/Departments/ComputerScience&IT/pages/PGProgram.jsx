// UGProgramPage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./PGProgram.css";
import Head from "../HeaderMenuComponent/head";


const PGProgramPage = () => {
    const [pgPrograms, setPgPrograms] = useState([]);

    useEffect(() => {
        // Using the provided route to fetch data
        axios.get('http://localhost:5000/api/department-program/department/CSIT')
            .then(response => {
                // Assuming the server response has the same structure as the model
                setPgPrograms(response.data.programs.pg);
            })
            .catch(error => {
                console.error("Error fetching PG programs:", error);
            });
    }, []);

    return (<>
      <div className="first">
        <Head />
      </div>
        <div className="pg-program-page">
            <h2>PG Programs</h2>
            <ul className="pg-program-list">
                {pgPrograms.map(program => (
                    <li key={program.name}>
                        <h3>{program.name}</h3>
                        <p>{program.text}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default PGProgramPage;
