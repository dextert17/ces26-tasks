var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.use(cookieParser());
app.get('/index.html', function (req, res) {
	console.log("Cookies:", req.cookies)
	res.sendFile(__dirname+"/"+"index.html");
})

app.get('/process_get', function(req, res) {
	// Prepare output in JSON format
	response = {
		firstname: req.query.firstname,
		lastname: req.query.lastname
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res) {
	// Prepare output in JSON format
	response = {
		firstname: req.body.firstname,
		lastname: req.body.lastname
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at index.html%s%s", host, port)
})