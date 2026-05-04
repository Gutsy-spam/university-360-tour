// UGProgramPage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./phdprogram.css";
import Head from "../HeaderMenuComponent/head";


const PhdProgramPage = () => {
    const [phdPrograms, setPhdPrograms] = useState([]);

    useEffect(() => {
        // Using the provided route to fetch data
        axios.get('http://localhost:5000/api/department-program/department/CSIT')
            .then(response => {
                // Assuming the server response has the same structure as the model
                setPhdPrograms(response.data.programs.phd);
            })
            .catch(error => {
                console.error("Error fetching Phd programs:", error);
            });
    }, []);

    return (<>
      <div className="first">
        <Head />
      </div>
        <div className="phd-program-page">
            <h2>Phd Programs</h2>
            <ul className="phd-program-list">
                {phdPrograms.map(program => (
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

export default PhdProgramPage;
