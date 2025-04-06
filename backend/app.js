const express = require('express');
const qrRoutes = require('./routes/qrRoutes');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api/qr', qrRoutes);

module.exports = app;
