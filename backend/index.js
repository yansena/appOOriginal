const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/qrcodes', (req, res) => {
  const {data} = req.body;
  res.status(201).json({message: 'QR Code metadata saved', data});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
