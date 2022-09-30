'use strict'

const db = require('../config.db');
const Sequelize = require('sequelize');
const User = require('./user');

module.exports = db.sequelize.define(
    'answer',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        required: true
      },
      like: {
        type: Sequelize.  INTEGER,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
    }
  );
