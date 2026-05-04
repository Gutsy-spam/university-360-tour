const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');  // Assuming your model file is named 'Announcement.js'

// Get all announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get announcements by category
router.get('/category/:categoryName', async (req, res) => {
  try {
    
    const announcements = await Announcement.find({ category: req.params.categoryName }).sort({ date: -1 });
  
    
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get announcements by tag
router.get('/tag/:tagName', async (req, res) => {
  try {
    const announcements = await Announcement.find({ tags: { $in: [req.params.tagName] } }).sort({ date: -1 });
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
