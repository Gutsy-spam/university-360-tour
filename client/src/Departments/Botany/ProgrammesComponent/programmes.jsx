import React from "react";
import "./programmes.css";

const programmes = () => {
    return (
        <div className="dept-prog">
            <div className="dept-programmes">
                <img src="images/courses.png" alt="logo" />
                <h2>Programmes</h2>
                <ul className="dept-dropdown">
                    <li>UG Programme</li>
                    <li>PG Programme</li>
                    <li>Ph.d</li>
                    <li>Certificate Courses</li>
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
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                    <li>I welcome you on the behalf of the CSE Department.</li>
                </ul>

                <button class="read-more-button">Read All</button>                
            </div>





        </div>
    );
};

export default programmes;
