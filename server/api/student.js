const express = require('express');
const router = express.Router();
const { Student } = require('../db/associations');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
