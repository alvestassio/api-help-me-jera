'use strict'

const db = require('../config.db');
const Sequelize = require('sequelize');

module.exports = db.sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      email: {
        type: Sequelize.STRING,
        required: true
      },
      password: {
        type: Sequelize.STRING,
        required: true
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'https://jera-caveo.s3.amazonaws.com/AVATARDEFAULT.png'
      },
      team: {
        type: Sequelize.INTEGER,
        required: true
      }
    }
  );
