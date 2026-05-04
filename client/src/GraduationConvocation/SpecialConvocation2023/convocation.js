import React, { useState } from 'react';
import './convocation.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Convocation = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'images/10.jpg',
    '/images/11.jpg',
    'images/12.jpg',
    '/images/13.jpg',
    'images/14.jpg',
    '/images/15.jpg',
    // Add more image paths
  ];

  const openLightbox = (index) => {
    setIsLightboxOpen(true);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="convocation-container">
      <h1 className="convocation-heading">Special Convocation 2023</h1>
      <h3 className="convocation-subheading">Thursday, June 22, 2023</h3>
      <div className="convocation-content">
        <div className="convocation-image">
          <img src="images/IMG_4775.jpg" alt="Convocation" />
        </div>
        <div className="convocation-text">
          <strong>
            Hon'ble Vice President India Sh. Jagdeep Dhankhar addresses the Special Convocation ceremony of University of Jammu
          </strong>
          <div className="convocation-paragraph">
            <p>
              Dhankhar noted that the region, unlike before, now has the prevalence of harmonious atmosphere and called it as the greatest homage to the life and mission of Dr Shyama Prasad Mookerjee who laid down his life for building a strong and united India. The Vice President announced a Memorandum of Understanding between the Indian Council of World Affairs and University of Jammu. This, he said, will facilitate greater exposure to the University in domains of culture, education and foreign affairs at a global level.
            </p>
          </div>
          {/* Your paragraph content */}
        </div>
      </div>
      <div className="gallery">
        <p className="gallery-link" onClick={() => openLightbox(0)}>Photo Gallery (Click to see Images...)</p>
      </div>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        />
      )}

      {/* Embed YouTube videos */}
      <div className="youtube-videos">
        <h2>YouTube Videos</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="YouTube Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID_2"
          title="YouTube Video 2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* Add more iframe elements for more videos */}
      </div>
    </div>
  );
};

export default Convocation;
