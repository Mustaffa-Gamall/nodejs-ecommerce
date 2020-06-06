const mongoose = require('mongoose')


const URL = process.env.URL || 'mongodb://localhost:27017/CRUD_DB'

mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

mongoose.connect(URL, {
   useNewUrlParser: true,
   useCreateIndex: true
});

require('../models/user')
const db = mongoose.connection;

db.on('error', () => {
   console.log('Error occured in db connection');
});

db.on('open', () => {
   console.log('DB Connection established successfully');
});