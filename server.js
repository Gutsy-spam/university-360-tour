// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

// Create an Express application
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Set up middleware
app.use(express.json());


// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/university-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));





// API Routes
const marqueeRoutes = require('./routes/marqueeRoutes');
const lifejuRoutes = require('./routes/lifejuRoutes');
const researchRoutes = require('./routes/researchRoutes');
const tabDataRoute = require('./routes/tabDataRoute');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const albumRoutes = require('./routes/albums'); 
const departmentImageSliderRoute = require('./routes/departmentImageSliderRoute');
const departmentAboutRoute = require('./routes/departmentAboutRoute');
const departmentProgramRoutes = require('./routes/departmentProgramRoutes');




// Use routes
app.use('/api/marquee', marqueeRoutes);
app.use('/api/lifeju', lifejuRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/tabs', tabDataRoute);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/department-images', departmentImageSliderRoute);
app.use('/api/departmentAbout', departmentAboutRoute);
app.use('/api/department-program', departmentProgramRoutes);




app.get('/', (req, res) => {
  res.send('Welcome to the University Website API');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
