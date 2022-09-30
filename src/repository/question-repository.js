'use strict'

exports.create = (params) => {
  const question = Question.create(params);

  return question;
};

exports.listAll = () => {
  const questions = Question.findAll({ order: [['createdAt', 'DESC']] });

  return questions;
};

exports.getById = (id) => {
  const question = Question.findByPk(id, { include: [User, Tag] });

  return question;
};
