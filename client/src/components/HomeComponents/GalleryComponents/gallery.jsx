import React from 'react'
import "./gallery.css";
import { Link } from "react-router-dom";

const gallery = () => {
    return (
        <>
            <div class="gallery-section"><Link to="AlbumList">
                <h1 class="gallery-heading">MEDIA GALLERY</h1>
                <div className="grid-container1">
                    <div className="grid-item1">
                        <img src="images/image1.jpg" alt="logo" />
                    </div>
                    <div className="grid-item1">
                        <img src="images/image2.jpg" alt="logo" />
                    </div>
                    <div className="grid-item1">
                        <img src="images/image3.jpg" alt="logo" />
                    </div>
                    <div className="grid-item1">
                        <img src="images/image4.jpg" alt="logo" />
                    </div>
                    <div className="grid-item1">
                        <img src="images/image5.jpg" alt="logo" />
                    </div>
                    <div className="grid-item1">
                        <img src="images/image6.jpg" alt="logo" />
                    </div>
                </div></Link>
            </div>
        </>
    )
}

export default gallery