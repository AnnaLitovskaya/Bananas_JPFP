const { DataTypes } = require('sequelize');
const db = require('./db');

const Student = db.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageURL: {
    type: DataTypes.STRING,
    defaultValue: 'https://placeimg.com/640/480/people',
  },
  gpa: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Student;
