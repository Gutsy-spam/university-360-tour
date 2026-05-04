const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['JU_CORNER', 'TOP_DESTINATIONS', 'IMPORTANT_LINKS'],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TabData', DataSchema,'TabData');
