import React from "react";
import { Link } from "react-router-dom";
import "./Flexcontainer.css";

const Flexcontainer = () => {
    return (
        <div>
            <div className="flex-container">
                <div className="box">
                    <i class="fa-solid fa-user-graduate"></i>
                    <Link to="/campuslife"><h3>For Students</h3></Link>
                    <p>Find all resources for students in one place!</p>
                </div>

                <div className="box">
                    <i class="fa-solid fa-user-tie"></i>
                    <Link to="/faculty"><h3>For Faculty</h3></Link>
                    <p>Find all resources for faculty in one place!</p>
                </div>

                <div className="box">
                    <i class="fa-solid fa-people-group"></i>
                    <Link to="/visitors"><h3>For Visitors</h3></Link>
                    <p>Find all resources for visitors in one place!</p>
                </div>
            </div>
        </div>
    );
};

export default Flexcontainer;
