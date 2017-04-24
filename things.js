var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('Get route for things')
});

router.post('/', function (req, res) {
	res.send('post route for things')
});

module.exports = router;