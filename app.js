const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./db/dbConnection")
const feedbackRoutes = require('./route/feedBack');

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/feedback', feedbackRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
