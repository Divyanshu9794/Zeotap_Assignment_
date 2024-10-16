const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rule_engine_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
