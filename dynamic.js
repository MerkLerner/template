var express = require('express');
var router = express.Router();

router
	// you can add a regex for pattern matching
	.get('/:id([0-9]{5})', function (req,res){
		res.send('you in')
	})
	.get('/:id', function(req, res){
		res.send('the id is ' + req.params.id);
	})
	.get('/:id/:boop', function (req, res) {
		var urlInput = `${req.params.id} and ${req.params.boop}`;
		res.send('Two dynamic pieces: ' + urlInput);
	})
module.exports = router;