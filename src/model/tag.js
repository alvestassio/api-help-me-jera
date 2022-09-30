'use strict'

const db = require('../config.db');
const Sequelize = require('sequelize');

module.exports = db.sequelize.define(
    'tag',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        required: true
      }
    }
  );
