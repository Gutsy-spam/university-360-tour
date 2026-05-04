// UGProgramPage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./UGProgramPage.css";
import Head from "../HeaderMenuComponent/head";


const UGProgramPage = () => {
    const [ugPrograms, setUgPrograms] = useState([]);

    useEffect(() => {
        // Using the provided route to fetch data
        axios.get('http://localhost:5000/api/department-program/department/CSIT')
            .then(response => {
                // Assuming the server response has the same structure as the model
                setUgPrograms(response.data.programs.ug);
            })
            .catch(error => {
                console.error("Error fetching UG programs:", error);
            });
    }, []);

    return (<>
      <div className="first">
        <Head />
      </div>
        <div className="ug-program-page">
            <h2>UG Programs</h2>
            <ul className="ug-program-list">
                {ugPrograms.map(program => (
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

export default UGProgramPage;
