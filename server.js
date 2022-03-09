//clustering

const cluster = require('cluster');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  //multiple copies of our server running
} else {
  app.get('/', (req, res, next) => {
    res.send('Hello, World!');
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
  });
}
