var express = require('express')
var router = express.Router();

router
	.get('/first_template', function(req, res) {
		res.render('first_view');
	})
	.get('/data/:num', function(req, res){
		res.render('dynamic.pug', {name: 'MIKE\'s Page', 
			url: 'http://www.google.com',
			num: req.params.num
		})
	})
	.get('/includes', function (req, res) {
		res.render('includes.pug')
	})

module.exports = router;