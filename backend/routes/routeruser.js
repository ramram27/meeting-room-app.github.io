const user = require('../models/User');
const express = require('express');
const router = express.Router();


router.get('/user', (req,res)  =>{
  res.send(User);
});

router.post('/user', (req,res,next) =>{
  user.create(req.body).then(function (User) {
    res.send(User);
  }).catch(next);
});

module.exports = router;