const mongoose = require('mongoose');
const user = mongoose.model('User');

/**
 * Create
 */

exports.createUser = function(data, callback){
   user.create(data).then((response) => {
      callback(null, response);
   }, (error) => {
      callback(error, null);
   });
}

/**
 * Read
 */
exports.findUser = function(query, callback){
   user.findOne(query, callback);
}

/**
 * Update
 */
exports.updateUserById = function(id, data, callback){
   user.findByIdAndUpdate({
      _id: id
   }, data, (err, res) => {
      callback(err, res);
   });
}

exports.updateUser = function(query, data, options, callback){
   user.findOneAndUpdate(query, data, options, (err, res) => {
      callback(err, res);
   });
}

/**
 * Delete
 */

exports.deleteUser = function(query, callback){
   user.deleteOne(query, callback);
}