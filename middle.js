var express = require('express');
var router  = express.Router();

router.use(function(req, res, next) {
	console.log('before');
	next();
})


router.get('/mid', function(req, res, next) {
	res.send('middle');
	next();
})

router.use(function(req, res, next) {
	console.log('after');
	next();
})

module.exports = router;