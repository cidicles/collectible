const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/collectionModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/collectiondb', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/collectionRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({error: req.originalUrl + ' not found'})
});

app.listen(port);

const because = require('./because');
because();

console.log('collection api started on: ' + port);
