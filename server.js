const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Worker_router = require('./router/WorkerList'); // Ensure this path is correct

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3000;
const MONGOOSE_URL = process.env.MONGOOSE_URL;

mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongoose database is connected');
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.get('/', (req, res) => {
    res.json({ msg: 'Hello world' });
});

app.use('/api', Worker_router); // Use '/api' as the base route for all worker routes