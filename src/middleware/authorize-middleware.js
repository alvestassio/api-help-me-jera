'use strict';

const userRepository = require('../repository/user-repository');

exports.authorize = async (req, res, next) => {
  try {
    const token =
      req.headers['x-access-token'] ||
      req.headers['authorization'].replace('Bearer', '');

    const user = await userRepository.getByToken(token);

    if (!user) return res.status(401).send({ message: 'Token inválido' });

    global.currentUser = user;

    next();
  } catch (error) {
    res.status(500).send({ message: "Algo deu errado ao processar a requisição", error: error.message });
  }
};