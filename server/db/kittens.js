const Sequelize = require('sequelize');
const db = require('./db');

const Kittens = db.define('kittens', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Kittens;
