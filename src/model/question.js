'use strict'

const db = require('../config.db');
const Sequelize = require('sequelize');
const User = require('./user');
const Tag = require('./tag');

module.exports = db.sequelize.define(
    'question',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        required: true
      },
      description: {
        type: Sequelize.STRING,
        required: true
      },
      open: {
        type: Sequelize.BOOLEAN ,
        defaultValue: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: Tag,
          key: 'id'
        }
      }
    }
  );
