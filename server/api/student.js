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

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: {
        model: Campus,
      },
    });
    res.send(student);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
