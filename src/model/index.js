const User = require('./user');
const Question = require('./question');
const Answer = require('./answer');
const Tag = require('./tag');

User.hasMany(Question);
Question.belongsTo(User);

User.hasMany(Answer);
Answer.belongsTo(User);

Question.hasMany(Answer);
Answer.belongsTo(Question);

Question.belongsTo(Tag);
Tag.hasMany(Question);

module.exports = {
  User,
  Question,
  Answer,
  Tag
};
