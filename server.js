const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/collectionModel'), //created model loading here
  bodyParser = require('body-parser'),
  args = process.argv.slice(2);

// mongoose instance connection url connection
mongoose.Promise = Promise;
let path = args[0] === 'local' ? 'mongodb://localhost/collectiondb' : 'mongodb://mongo/collectiondb';
mongoose.connect(path, {
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
