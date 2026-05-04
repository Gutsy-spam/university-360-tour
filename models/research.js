const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
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

const research = mongoose.model('research', researchSchema, 'research');

module.exports = research;
