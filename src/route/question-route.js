'use strict';

const { authorize } = require('../middleware/authorize-middleware');
const questionController = require('../controller/question-controller');
const express = require('express');
const router = express.Router();

router.post('/', questionController.create);
router.get('/', questionController.listAll);
router.get('/:id', questionController.getById);

module.exports = router;
