var express = require('express');
var app = express();

//need to add in bodyparser for json, url
var bodyParser = require('body-parser');	

//routers
var things = require('./things.js');
var dynamic = require('./dynamic.js');
var middle = require('./middle.js');
var templating = require('./temple.js');
var forms = require('./forms.js');

//view engine		
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended: true}));

app.use('/things', things);
app.use('/dynamic', dynamic);
app.use('/middle', middle);
app.use('/render', templating)
app.use('/forms', forms);

//error handling
app.get('*', function(req, res){
	res.send('404 dawg')
})

app.listen(5000, ()=>{
	console.log('\nnow running\n')
});
