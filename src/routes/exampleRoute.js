const express = require('express');
const { getExamples } = require('../controllers/exampleController');
const router = express.Router();

router.get('/', getExamples);

module.exports = router;
