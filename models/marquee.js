const mongoose = require('mongoose');

const marqueeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Marquee = mongoose.model('Marquee', marqueeSchema, 'marquee');

module.exports = Marquee;
