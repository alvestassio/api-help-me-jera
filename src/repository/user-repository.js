'use strict'

exports.create = async (params) => {
  const user = await User.create(params);

  return user;
};

exports.getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};
