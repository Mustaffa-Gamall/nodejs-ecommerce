const express = require('express');
const bodyParser = require('body-parser');
//config
require('./config/connection');

//routes
const routes = require('./routes/index');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);
app.use('/api/users', usersRouter);


module.exports = app;