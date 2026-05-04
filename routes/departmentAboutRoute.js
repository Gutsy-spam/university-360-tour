const express = require('express');
const router = express.Router();
const DepartmentAbout = require('../models/DepartmentAbout'); // Replace with the path to your DepartmentAbout model

// Route to get DepartmentAbout data by department name
router.get('/department/:departmentName', async (req, res) => {
    try {
        const departmentName = req.params.departmentName;
        const departmentData = await DepartmentAbout.findOne({ departmentName: departmentName });

        if (!departmentData) {
            return res.status(404).send({ message: 'Department not found.' });
        }

        res.send(departmentData);
    } catch (error) {
        res.status(500).send({ message: 'Server error.' });
    }
});

module.exports = router;
