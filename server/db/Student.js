const { DataTypes } = require('sequelize');
const db = require('./db');

const Student = db.define('Student', {
  name: {
    type: DataTypes.STRING,
  },
  imageURL: {
    type: DataTypes.STRING,
  },
  gpa: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Student;
