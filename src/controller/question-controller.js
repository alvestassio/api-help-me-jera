'use strict';

const questionRepository = require('../repository/question-repository');

exports.create = async (req, res) => {
  try {
    let params = req.body;
    params.userId = 1;
    params.tagId = Number(params.tagId);

    const question = await questionRepository.create(params);

    res.status(200).send({ message: 'Dúvida registrada com sucesso', data: question });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};

exports.listAll = async (req, res) => {
  try {
    const questions = await questionRepository.listAll();

    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const questionId = req.params.id;

    const question = await questionRepository.getById(questionId);

    res.status(200).send(question);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};
