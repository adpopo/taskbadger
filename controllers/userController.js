var express = require('express');
var router = express.Router();
var User = require('../models');


router.get('/', function (req, res) {
  res.redirect('/index');
});



router.get('/index', function (req, res) {
  User.user.selectAll(function(data) {
    var hbsObject = { hbsObject: data };


    res.render('index', hbsObject);
  });
});



router.post('/task/create', function (req, res) {
  User.user.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});




router.post('/task/complete/:id', function (req, res) {
  User.user.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});


module.exports = router;