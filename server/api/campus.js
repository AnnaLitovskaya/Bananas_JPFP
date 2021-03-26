const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/associations');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: {
        model: Student,
      },
    });
    res.send(campuses);
  } catch (ex) {
    next(ex);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: {
        model: Student,
      },
    });
    res.send(campus);
  } catch (ex) {
    next(ex);
  }
});

router.post('/addCampus', async (req, res, next) => {
  try {
    console.log(req.body);
    res.send(await Campus.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
