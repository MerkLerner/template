var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('forms.pug')
})

.post('/', function(req, res) {
	res.send('there u go man' + req.body.to)
})

module.exports = router;