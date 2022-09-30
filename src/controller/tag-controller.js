'use strict';

const tagRepository = require('../repository/tag-repository');

exports.create = async (req, res) => {
  try {
    const params = req.body;

    const tag = await tagRepository.create(params);

    res.status(200).send({ message: 'Tag criada com sucesso', data: tag });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};

exports.listAll = async (req, res) => {
  try {
    const tags = await tagRepository.listAll();

    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};
