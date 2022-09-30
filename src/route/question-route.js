'use strict';

const { authorize } = require('../middleware/authorize-middleware');
const questionController = require('../controller/question-controller');
const express = require('express');
const router = express.Router();

router.post('/', authorize, questionController.create);
router.get('/', authorize, questionController.listAll);
router.get('/:id', authorize, questionController.getById);

module.exports = router;
