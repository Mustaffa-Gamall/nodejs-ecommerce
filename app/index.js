const express = require('express');

//config
require('./config/connection');

//routes
const routes = require('./routes/index');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use('/', routes);
app.use('/api/users', usersRouter);


module.exports = app;