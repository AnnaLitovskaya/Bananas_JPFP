const Student = require('./student.js');
const Campus = require('./campus.js');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus,
};
