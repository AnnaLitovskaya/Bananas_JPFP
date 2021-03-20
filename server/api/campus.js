const express = require('express');
const router = express.Router();
const { Campus } = require('../db/associations');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
