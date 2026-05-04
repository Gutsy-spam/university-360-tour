const mongoose = require('mongoose');

const lifejuSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const lifeju = mongoose.model('lifeju', lifejuSchema, 'lifeju');

module.exports = lifeju;
