import React, { useState, useEffect } from "react";
import "./Slider.css";

const imageData = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png",
    "images/05.png",
    "images/06.png",
];

function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(slideInterval);
    }, []);
    return (
        <div className="dept-image-slider1">
            {imageData.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                />
            ))}

            <div className="notice">
                <div className="overlay">
                    <div className="main-box">
                        <h1>Announcements</h1>
                        <ul>
                            <li>
                                Admission to Ph.D. Programmes (August Session) for Academic Year
                                2023-24
                            </li>
                            <span>Published on: 25-04-2023</span>
                            <li>
                                SPOT ADMISSIONS 2022 for M.Tech Computer Science (Data Science
                                and Information Security)
                            </li>
                            <span>Published on: 25-04-2023</span>
                            <li>
                                Admission to Ph.D. Programmes (August Session) for Academic Year
                                2023-24
                            </li>
                            <span>Published on: 02-08-2022</span>
                            <div className="dept-button">
                                <button className="read-all-button">Read All</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
