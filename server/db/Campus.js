const { DataTypes } = require('sequelize');
const db = require('./db');

const Campus = db.define('Campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: DataTypes.STRING,
    defaultValue: 'http://placeimg.com/200/200/arch',
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Campus;
