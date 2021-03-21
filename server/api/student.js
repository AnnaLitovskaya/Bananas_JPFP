const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../db/associations');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: {
        model: Campus,
      },
    });
    res.send(students);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
