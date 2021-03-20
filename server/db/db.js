const Sequelize = require('Sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/jpfp',
  { logging: false }
);

module.exports = db;
