'use strict'

exports.create = (params) => {
  const user = User.create(params);

  return user;
};

exports.update = (params, id) => {
  const response = User.update(params, { where: { id } });

  return response;
};

exports.getByEmail = (email) => {
  const user = User.findOne({ where: { email }, raw: true });

  return user;
};

exports.getByToken = (token) => {
  const user = User.findOne({ where: { token }, raw: true });

  return user;
};
