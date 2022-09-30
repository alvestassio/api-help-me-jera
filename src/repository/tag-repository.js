'use strict'

exports.listAll = () => {
  const tags = Tag.findAll();

  return tags;
};

exports.create = (params) => {
  const tag = Tag.create(params);

  return tag;
};
