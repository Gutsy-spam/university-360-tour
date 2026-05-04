// UGProgramPage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./certificate.css";
import Head from "../HeaderMenuComponent/head";


const Certificates = () => {
    const [certificatesPrograms, setcertificatesPrograms] = useState([]);

    useEffect(() => {
        // Using the provided route to fetch data
        axios.get('http://localhost:5000/api/department-program/department/CSIT')
            .then(response => {
                // Assuming the server response has the same structure as the model
                setcertificatesPrograms(response.data.programs.certificates);
            })
            .catch(error => {
                console.error("Error fetching certificates programs:", error);
            });
    }, []);

    return (<>
      <div className="first">
        <Head />
      </div>
        <div className="certificates-program-page">
            <h2>Certificates Programs</h2>
            <ul className="certificates-program-list">
                {certificatesPrograms.map(program => (
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

export default Certificates;
