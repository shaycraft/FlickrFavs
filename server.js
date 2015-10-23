var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

//Need to revisit this hackjob at some point.
app.get('/:static', function(request, response) {
    var route = 'index.html';

    response.sendFile(route, { root: './public/' });
});

app.get('/views/:static', function(request, response) {
    var static = request.params.static,
        route;

    if (static) {
        if (!path.extname(static))
            route = static + '.html';
    }
    else
        route = 'home.html';

    response.sendFile(route, { root: './public/app/views/' });
});