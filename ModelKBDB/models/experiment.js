var mongoose = require('mongoose');

var ExperimentSchema = new mongoose.Schema({
  model_name: String,
  framework: String,
  size: String,
  epochs: String,
  layersCount: String,
  InputTensors: String,
  OutputTensor: String,
  Optimizer: String,
  LossFunction: String,
  AccuracyValue: String,
  LossValue: String,
  },
  {collection:'Experiment'}
);

const Experiment = mongoose.model('Experiment',ExperimentSchema);
module.exports = Experiment;
