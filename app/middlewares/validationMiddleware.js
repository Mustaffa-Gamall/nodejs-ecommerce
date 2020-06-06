const validator = require('../helpers/validation');

const user = (req, res, next) => {
   const rule = {
      'username' : 'required'
   }

   validator(req.body, rule, {}, (err, status) => {
      if(!status) {
         res.status(412)
            .send({
               success: false,
               message: 'Validation failed',
               data: err
            });
      } else {
         next();
      }
   });
}

module.exports = {
   user
}