const express = require('express');
const { getExamples } = require('../controllers/exampleController');
const router = express.Router();

router.get('/example', getExamples);

module.exports = router;
