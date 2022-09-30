'use strict';

const userRepository = require('../repository/user-repository');
const teamEnum = require('../model/enum/team-enum');
const bcrypt = require('bcryptjs');

exports.create = async (req, res) => {
  try {
    let params = req.body;

    if (userExists(params.email)) return res.status(402).send({ message: 'Email inválido' });

    params.password = await encryptPassword(params.password);
    params.team = teamEnum[params.team];

    const user = await userRepository.create(params);

    res.status(200).send({ message: 'Usuário criado com sucesso', data: user });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado ao processar a requisição', error: error.message });
  }
};

async function userExists(email) {
  const user = await userRepository.getByEmail(email);

  return user;
};

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);

  password = await bcrypt.hash(password, salt);

  return password;
};
