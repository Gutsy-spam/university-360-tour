const express = require('express');
const router = express.Router();
const DepartmentProgramSectionModel = require('../models/DepartmentProgramSectionModel');

// Get program section data by department name
router.get('/department/:departmentName', async (req, res) => {
    try {
        const departmentName = req.params.departmentName;
        const programData = await DepartmentProgramSectionModel.findOne({ departmentName: departmentName });

        if (!programData) {
            return res.status(404).send({ message: 'Department not found.' });
        }

        res.send(programData);
    } catch (error) {
        res.status(500).send({ message: 'Server error.' });
    }
});

module.exports = router;
