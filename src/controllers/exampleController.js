const ExampleModel = require('../models/ExampleModel');

const getExamples = async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.json(examples);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getExamples };
