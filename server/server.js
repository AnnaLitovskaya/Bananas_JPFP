const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res, next) => {
  try {
    res.send(`<h1>Page can't be found. ¯\\_(ツ)_/¯</h1>`);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
