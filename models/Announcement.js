const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  pdfLink: {
    type: String,
    required: true,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  category: {
    type: String,
    required: true,
    enum: [
      'Order', 
      'Circular', 
      'Announcement & Notices', 
      'News', 
      'Teaching Staff', 
      'Non-Teaching Staff'
    ],
  },
});

const Announcement = mongoose.model('Announcement', announcementSchema, 'announcements');

module.exports = Announcement;
