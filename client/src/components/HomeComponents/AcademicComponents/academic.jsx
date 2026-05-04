import React from "react";
import "./academic.css";

const academic = () => {
    return (
        <div className="academic-units">
            <div className="mainbox">
                <div className="heading-unit">
                    <h3>ACADEMIC UNITS</h3>
                </div>

                <div className="departments-box">
                    <div className="left-box">
                        <div className="box1">
                            <i class="fa-solid fa-building-user">
                            <h3>23 DEPARTMENTS</h3>
                            </i>

                            <p>
                                Jammu University has 23 academic departments covering <br />{" "}
                                engineering, architecture and planning, sciences,
                                <br /> humanities & social sciences, and management <br />{" "}
                                programmes.
                            </p>
                        </div>

                        <div className="box1">
                            <i class="fa-solid fa-building-columns">
                                <h3>16 OFF CAMPUSES</h3>
                            </i>

                            <p>
                                Jammu University has 16 academic departments covering <br />{" "}
                                engineering, architecture and planning, sciences,
                                <br /> humanities & social sciences, and management
                                <br /> programmes.
                            </p>
                        </div>

                        <div className="box1">
                            <i class="fa-solid fa-school-flag">
                                <h3>12 CONSTITUENT COLLEGES</h3>
                            </i>

                            <p>
                                Jammu University has 12 academic departments covering
                                <br /> engineering, architecture and planning, sciences,
                                <br /> humanities & social sciences, and management
                                <br /> programmes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default academic;
