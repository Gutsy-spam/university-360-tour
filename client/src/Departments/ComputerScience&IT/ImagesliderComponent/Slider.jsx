import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Slider.css";

function Slider() {
    const [announcements, setAnnouncements] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
       

        // Fetch announcements with tag CS&IT
        axios.get('http://localhost:5000/api/announcements/tag/CSIT')
            .then((response) => {
                setAnnouncements(response.data);
            })
            .catch((error) => {
                console.error("Error fetching announcements:", error);
            });
 // Fetch images based on department name
 axios.get('http://localhost:5000/api/department-images/CSIT')  
        .then((response) => {
            setImageData(response.data.images);
            const slideInterval = setInterval(() => {
                setCurrentImageIndex((prevImageIndex) => {
                    if (prevImageIndex === response.data.images.length - 1) {
                        return 0;
                    }
                    return prevImageIndex + 1;
                });
            }, 1000);

            // Cleanup the interval on component unmount
            return () => clearInterval(slideInterval);

        })
        .catch((error) => {
            console.error("Error fetching images:", error);
        });

    // ... rest of the fetching function ...

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
                            {announcements.map(announcement => (
                                <React.Fragment key={announcement._id}>
                                    <li>{announcement.title}</li>
                                    <span>Published on: {new Date(announcement.date).toLocaleDateString()}</span>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="dept-button">
                        <button className="read-all-button">Read All</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
