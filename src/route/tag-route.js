'use strict';

const { authorize } = require('../middleware/authorize-middleware');
const tagController = require('../controller/tag-controller');
const express = require('express');
const router = express.Router();

router.post('/', authorize, tagController.create);
router.get('/', tagController.listAll);

module.exports = router;
