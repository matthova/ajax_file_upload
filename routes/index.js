var express = require('express');
var router = express.Router();
var busboy = require('connect-busboy');
var fs = require('fs');

var files = {};

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


module.exports = router;
