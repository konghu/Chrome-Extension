var express = require('express');
var app = express();
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var alchemy_language = watson.alchemy_language({
    // api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
    api_key: '3a2ae4275a1c212ca5c8b0524523bcf8c096b779'
});

var parameters = {
    url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
};

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.post('/pjsabc', function (request, response) {
    var parameters = request.body;
    alchemy_language.sentiment(parameters, function (err, res) {
        if (err) {
            console.log('error:', err);
            response.send("this is error");
        }
        else {
            //     res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
            //     res.write((JSON.stringify(response, null, 2)));
            //     res.end();
            //   }
            // });
            response.send(res);
        }
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

