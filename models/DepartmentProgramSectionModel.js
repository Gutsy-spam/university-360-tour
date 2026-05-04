const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }
});

const academicSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    pdfLink: {
        type: String,
        required: true
    }
});

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    pdfLink: {
        type: String,
        required: true
    }
});

const departmentProgramSectionSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    programs: {
        ug: [programSchema],
        pg: [programSchema],
        phd: [programSchema],
        certificates: [programSchema]
    },
    academicInfo: {
        admissions: [academicSectionSchema],
        workshop: [academicSectionSchema],
        results: [academicSectionSchema],
        research: [academicSectionSchema]
    },
    publications: [publicationSchema]
});

const DepartmentProgramSectionModel = mongoose.model('DepartmentProgramSection', departmentProgramSectionSchema, 'DepartmentProgramSection');

module.exports = DepartmentProgramSectionModel;
