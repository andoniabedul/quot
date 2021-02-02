const express = require('express');
const path    = require('path');
const helmet  = require('helmet');
const parsers = {
  body: require('body-parser'),
  cookie: require('cookie-parser')
};

const app = express();
const router = express.Router();
const PUBLIC_PATH = path.join(__dirname, 'public');
const controllers = {
  root: require('./controllers/root.js')
};

app.use(express.static(PUBLIC_PATH));
app.use(helmet());
app.use(parsers.body.json());
app.use(parsers.body.urlencoded({ extended: false }));
app.use(parsers.cookie());

app.use('/', require('./routes/root')(router, controllers.root));

const handleRequestError = (req, res, next) => {
  var err = new Error('Oh oh, something went wrong. We dont found this page.');
  err.status = 404;
  return next(err);
};

const onServerRunning = () => {
  console.log('RUNNING ON PORT 3000');
};

app.use(handleRequestError);
app.listen(3000, onServerRunning);

module.exports = app;