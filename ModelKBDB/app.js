let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');


let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://modelkb:modelkb@modelkb-0dva5.gcp.mongodb.net/ModelKB?retryWrites=true')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

let apiRouter = require('./routes/experiment');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/ModelKBDB')));
app.use('/modeldb/details/:id', express.static(path.join(__dirname, 'dist/ModelKBDB')));
app.use('/modeldb/upload', express.static(path.join(__dirname, 'dist/ModelKBDB')));
app.use('/api', apiRouter);


//search part:
//let router = express.Router();
app.get('/modeldb-detail', function(req, res, next) {
  let searchQuery = {};

  if(req.query.name)
    searchQuery = { name: req.query.model_name };

  app.find(searchQuery, function(err, users){
    if (err) {
      res.status(400);
      res.send();
    }

    console.log("returning all the users.");
    res.send(users);
  })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});


module.exports = app;
