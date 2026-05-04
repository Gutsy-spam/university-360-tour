import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Album from './Album';
import './AlbumList.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [images, setImages] = useState([]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('/api/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      const fetchAlbumImages = async () => {
        try {
          const response = await axios.get(`/api/albums/${selectedAlbum}/images`);
          setImages(response.data);
          setCurrentPage(1);  // Reset to the first page when a new album is selected
        } catch (error) {
          console.error(error);
        }
      };

      fetchAlbumImages();
    }
  }, [selectedAlbum]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="album-list-container">
      <div className="album-list">
        {albums.map(album => (
          <Album key={album.id} album={album} setSelectedAlbum={setSelectedAlbum} />
        ))}
      </div>
      <div className="images-list">
        {selectedAlbum && currentImages.map((image, index) => (
          <img key={index} src={image.url} alt={image.name || `Image ${index}`} />
        ))}
      </div>
      <div className="pagination">
        {images.length > itemsPerPage && (
          <ul className="pagination-list">
            {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className='AlbumPages' onClick={() => paginate(index + 1)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AlbumList;
