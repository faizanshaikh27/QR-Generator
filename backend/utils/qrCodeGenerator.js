const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    return await QRCode.toDataURL(text); // returns base64 image
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
};

module.exports = generateQRCode;