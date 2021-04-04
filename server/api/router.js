const express = require('express');
const router = express.Router();
const campus = require('./campus.js');
const student = require('./student.js');

router.use('/campuses', campus);
router.use('/students', student);

module.exports = router;
