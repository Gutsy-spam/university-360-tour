import React from 'react'
import "./gallery.css";

const gallery = () => {
    return (
        <>
            <div class="gallery-section2"><a href='http://www.jammuuniversity.ac.in/media-gallery/photo-gallery' target="_blank" rel="noreferrer noopener">
                <h1 class="gallery-heading2">MEDIA GALLERY</h1>
                <div className="grid-container12">
                    <div className="grid-item12">
                        <img src="images/image1.jpg" alt="logo" />
                    </div>
                    <div className="grid-item12">
                        <img src="images/image2.jpg" alt="logo" />
                    </div>
                    <div className="grid-item12">
                        <img src="images/image3.jpg" alt="logo" />
                    </div>
                    <div className="grid-item12">
                        <img src="images/image4.jpg" alt="logo" />
                    </div>
                    <div className="grid-item12">
                        <img src="images/image5.jpg" alt="logo" />
                    </div>
                    <div className="grid-item12">
                        <img src="images/image6.jpg" alt="logo" />
                    </div>
                </div></a>
            </div>
        </>
    )
}

export default gallery