import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import './AlbumDetails.css';

const AlbumDetails = ({ match }) => {
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`/api/albums/${albumId}/images`);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching album images:", error);
      }
    };

    fetchImages();
  }, [albumId]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="album-details-container">
      <div className="images-grid">
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.altText}
            onClick={() => handleImageClick(index + indexOfFirstItem)}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map(img => ({ src: img.url }))}
          plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          startFrom={selectedImageIndex}
        />
      )}
    </div>
  );
};

export default AlbumDetails;
