const express = require('express');
const { createQRCode } = require('../controllers/qrController');
const router = express.Router();

router.post('/', createQRCode);

module.exports = router;