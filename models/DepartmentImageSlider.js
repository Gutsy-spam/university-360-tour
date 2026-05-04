const mongoose = require('mongoose');

const DepartmentImageSliderSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
    trim: true,
  },
  images: [{
    type: String,  // Assuming you're storing image URLs
    required: true,
  }],
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const DepartmentImageSlider = mongoose.model('DepartmentImageSlider', DepartmentImageSliderSchema,'DepartmentImageSlider');

module.exports = DepartmentImageSlider;
