const express = require('express');
const router = express.Router();
const Marquee = require('../models/marquee');

// Marquee API route
router.get('/', async (req, res) => {
  try {
    const marquee = await Marquee.find();
    res.json(marquee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
