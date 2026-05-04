const mongoose = require('mongoose');

const departmentAboutSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        trim: true,
        unique: true // Assuming each department name is unique
    },
    aboutText: {
        type: String,
        required: true,
        trim: true
    },
    hodMessage: {
        text: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String, // this will be a URL or path to the image
            required: true
        }
    }
});

const DepartmentAbout = mongoose.model('DepartmentAbout', departmentAboutSchema,'DepartmentAbout');

module.exports = DepartmentAbout;
