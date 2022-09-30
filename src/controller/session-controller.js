'use strict';

const userRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.create = async (req, res) => {
  const { email, password } = req.body;

  const user = await userRepository.getByEmail(email);

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(404).send({ message: 'Email ou Senha incorreta' });

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.SALT_KEY
    );

    await userRepository.update({ token }, user.id);

    return res.status(200).send({ token });
  }

  res.status(404).send({ message: 'Email ou Senha incorreta' });
};
