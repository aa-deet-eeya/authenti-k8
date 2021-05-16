const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');

const apiRoutes = require('./src/routes/api');
const manufacturerRoutes = require('./src/routes/manufacturer')
const customerRoutes = require('./src/routes/customers') 
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();
require('./src/config/sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/manufacturer', manufacturerRoutes);
app.use('/customer', customerRoutes);
// app.use(errorHandler);

module.exports = app;