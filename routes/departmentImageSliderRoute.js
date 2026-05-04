const express = require('express');
const router = express.Router();
const DepartmentImageSlider = require('../models/DepartmentImageSlider');

// POST route to add images for a department
router.post('/add', async (req, res) => {
    const { departmentName, images } = req.body;

    try {
        // Check if this department already has images
        let departmentImages = await DepartmentImageSlider.findOne({ departmentName });
        
        if (departmentImages) {
            // If images already exist for this department, update it
            departmentImages.images = images;
            await departmentImages.save();
            return res.status(200).json({ message: 'Updated successfully', departmentImages });
        }

        // If no images exist for this department, create a new entry
        departmentImages = new DepartmentImageSlider({
            departmentName,
            images
        });

        await departmentImages.save();
        res.status(201).json({ message: 'Added successfully', departmentImages });
    } catch (err) {
        console.error("Error while adding/updating images:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to retrieve images for a department
router.get('/:departmentName', async (req, res) => {
    try {
        const departmentImages = await DepartmentImageSlider.findOne({ departmentName: req.params.departmentName });

        if (!departmentImages) {
            return res.status(404).json({ message: 'No images found for this department' });
        }

        res.status(200).json(departmentImages);
    } catch (err) {
        console.error("Error while fetching images:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
