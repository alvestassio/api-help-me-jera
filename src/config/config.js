const db = require('../config.db');

const models = require('../model/index');

global.User = models.User;
global.Question = models.Question;
global.Answer = models.Answer;
global.Tag = models.Tag;

global.DB = db.sequelize;
