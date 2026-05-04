const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const albumsPath = path.join(__dirname, '../public/albums');

// Fetch the list of albums
router.get('/', (req, res) => {
  const albums = fs.readdirSync(albumsPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => ({ id: dir.name, name: dir.name }));

  res.json(albums);
});

// Serve thumbnail image for an album
router.get('/:albumId/thumbnail', (req, res) => {
  const { albumId } = req.params;
  const albumPath = path.join(albumsPath, albumId);
  const images = fs.readdirSync(albumPath, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.match(/\.(jpg|jpeg|png|gif|heic)$/i));

  if (images.length > 0) {
    res.sendFile(path.join(albumPath, images[0].name));
  } else {
    res.sendFile(path.join(__dirname, '../public/placeholder.png')); // You can provide a placeholder image
  }
});

router.get('/:albumId/images', (req, res) => {
  const { albumId } = req.params;
  const albumPath = path.join(albumsPath, albumId);
  const images = fs.readdirSync(albumPath, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.match(/\.(jpg|jpeg|png|gif|mp4|mkv|heic)$/i))
    .map(file => ({
      url: `/api/albums/${albumId}/image/${file.name}`,
      altText: file.name
    }));

  res.json(images);
});

// Serve individual image from an album
router.get('/:albumId/image/:imageName', (req, res) => {
  const { albumId, imageName } = req.params;
  const imagePath = path.join(albumsPath, albumId, imageName);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send('Image not found');
  }
});

module.exports = router;
  