// tabDataRoute.js
const express = require('express');
const router = express.Router();
const TabData = require('../models/TabData');  // Assuming you have a model named TabData

// Fetch all tab data
router.get('/', async (req, res) => {
    try {
      const tabs = await TabData.find();
      res.json(tabs);
    } catch (err) {
      console.error("Error fetching tabs:", err); // Log the specific error
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
// Fetch tab data by category
router.get('/tabs/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const tabs = await TabData.find({ category: category });
    if (tabs.length === 0) return res.status(404).json({ message: 'No data found for this category' });
    res.json(tabs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
