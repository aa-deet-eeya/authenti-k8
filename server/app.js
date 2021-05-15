const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');

const apiRoutes = require('./src/routes/api');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();
require('./src/config/sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use(errorHandler);

module.exports = app;