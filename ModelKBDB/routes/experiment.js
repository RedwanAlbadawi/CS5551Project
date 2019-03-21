var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Experiment = require('../models/experiment.js');

/* GET ALL EXPERIMENTS */
router.get('/', function(req, res, next) {
  Experiment.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE EXPERIMENT BY ID */
router.get('/:id', function(req, res, next) {
  Experiment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE EXPERIMENT */
router.post('/', function(req, res, next) {
  Experiment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE EXPERIMENT */
router.put('/:id', function(req, res, next) {
  Experiment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE EXPERIMENT */
router.delete('/:id', function(req, res, next) {
  Experiment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
