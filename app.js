var express = require('express');
var app = express();
var rp = require('request-promise');
var moment = require('moment');

function wit_search(query) {

    var options = {
        uri: 'needs Uri',
        qs: {
            q: query,
        },
        headers: {
            authorization: "needs authorization",
        },
        json: true
    };
    return rp(options)
}

app.get('/witdate', function(req, res) {

	var query = req.query.q;

	wit_search(query).then(function(data) {
		res.json(data.entities.datetime[0].value);
	}).catch(function(err) {
		console.log(err.stack);
		res.sendStatus(400);
	})
})


module.exports = app;

/*
app.listen(3000);*/
