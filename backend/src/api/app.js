const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const userRegister = require('../routes/registerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRoutes);
app.use('/', userRegister);

module.exports = app;
