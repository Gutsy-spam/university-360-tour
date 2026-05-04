import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./programmes.css";
import { Link } from "react-router-dom";

const Programmes = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const departmentName = "CSIT";  // Change this to your actual department name or fetch it dynamically

        // Fetch publications for the specific department
        axios.get(`http://localhost:5000/api/department-program/department/CSIT`)
            .then((response) => {
                setPublications(response.data.publications);
            })
            .catch((error) => {
                console.error("Error fetching publications:", error);
            });
    }, []);
    return (
        <div className="dept-prog">
            <div className="dept-programmes">
                <img src="images/courses.png" alt="logo" />
                <h2>Programmes</h2>
                <ul className="dept-dropdown">
                <Link to="/CS&IT/UGProgram" ><li>UG Programme</li></Link>
                <Link to="/CS&IT/PGProgram"><li>PG Programme</li></Link>
                <Link to="/CS&IT/phd" >  <li>Ph.d</li></Link>
                <Link to="/CS&IT/certificates">   <li>Certificate Courses</li></Link>
                </ul>
            </div>
         


            <div className="dept-programmes">
                <img src="images/information.png" alt="logo" />
                <h2>Academic Information</h2>
                <ul className="dept-dropdown">
                    <li>Admissions</li>
                    <li>Workshop</li>
                    <li>Results</li>
                    <li>Research</li>
                </ul>
            </div>


            <div className="dept-programmes">
                <h2>Publications</h2>
                <ul className="dept-dropdown">
                    {publications.map(pub => (
                        <li key={pub.title}>{pub.title}</li>
                    ))}
                </ul>

                <button class="read-more-button">Read All</button>                
            </div>





        </div>
    );
};

export default Programmes;
