const express = require('express');
const router = express.Router();
const user = require('../controller/userController');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.get('/', function(req, res, next){
   res.send('respond with a resource');
});

router.post('/', validationMiddleware.user ,user.create);

router.put('updatebyid', user.updateById);

router.delete('/delete', user.delete);

module.exports = router;