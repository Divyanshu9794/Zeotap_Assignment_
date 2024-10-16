const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend'))); // Adjust the path to point to your frontend directory

// Routes
app.use('/api', ruleRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
