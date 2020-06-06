const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

router.get('/', function(req, res, next){
   res.send('respond with a resource');
});

router.post('/', user.create);

router.put('updatebyid', user.updateById);

router.delete('/delete', user.delete);

module.exports = router;