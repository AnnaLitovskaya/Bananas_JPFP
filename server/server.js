const express = require('express');
const app = express();
const { Student, Campus } = require('./db/associations');
const router = require('./api/router');

app.use('/api', router);

app.get('/', (req, res, next) => {
  try {
    res.send('Hello World!!!');
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
