const generateQRCode = require('../utils/qrCodeGenerator');

const createQRCode = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const qrImage = await generateQRCode(text);
    res.status(200).json({ qrImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQRCode };
