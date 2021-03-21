const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

app.use('/api', router);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

module.exports = app;
