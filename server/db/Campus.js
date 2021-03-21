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
    defaultValue: 'https://picsum.photos/id/101/200',
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
