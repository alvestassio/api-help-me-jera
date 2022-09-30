'use strict';

const userController = require('../controller/user-controller');
const sessionController = require('../controller/session-controller');
const express = require('express');
const router = express.Router();

router.post('/', userController.create);
router.post('/sign-in', sessionController.create);
router.get('/', userController.listAll);


module.exports = router;
