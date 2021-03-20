const express = require('express');
const router = express.Router();
const campus = require('./campus');
const student = require('./student');

router.use('/campuses', campus);
router.use('/students', student);

module.exports = router;
