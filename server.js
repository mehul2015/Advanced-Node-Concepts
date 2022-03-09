const express = require('express');
const crypto = require('crypto');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hello, World!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
