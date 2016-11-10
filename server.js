// var http=require("http");
// var server=http.createServer(function(req,res){
//     if(req.url=="/abc"){
//         //res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
//         //res.write("你好啊!");
//
//         var watson = require('watson-developer-cloud');
//         var alchemy_language = watson.alchemy_language({
//             api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
//         });
//
//         var parameters = {
//             url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
//         };
//
//         alchemy_language.emotion(parameters, function (err, response) {
//             if (err)
//                 console.log('error:', err);
//             else {
//                 res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
//                 res.write((JSON.stringify(response, null, 2)));
//                 res.end();
//             }
//         });
//
//     }
// });
//
// server.listen(1337,"localhost",function(){
//     var watson = require('watson-developer-cloud');
//     var alchemy_language = watson.alchemy_language({
//         api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
//     });
//
//     var parameters = {
//         url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
//     };
//
//     alchemy_language.emotion(parameters, function (err, response) {
//         if (err)
//             console.log('error:', err);
//         else
//             console.log(JSON.stringify(response, null, 2));
//
//     });
//
});



// var express = require('express');
// var app = express();
// var watson = require('watson-developer-cloud');
// var alchemy_language = watson.alchemy_language({
//     api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
// });
//
// // var parameters = {
// //   text: req.query
// // };
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(__dirname + '/public'));
//
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function (request, response) {
//     response.render('pages/index');
// });
//
// // app.get('/abc', function(request, response) {
// //
// //   alchemy_language.emotion(parameters, function (err, res) {
// //     if (err)
// //       console.log('error:', err);
// //     else {
// //       //     res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
// //       //     res.write((JSON.stringify(response, null, 2)));
// //       //     res.end();
// //       //   }
// //       // });
// //       response.send(JSON.stringify(res.docEmotions, null, 2));
// //     }
// //
// //   });
//
// app.use(express.bodyParser());
// app.post('/pabc', function (request, response) {
//     var parameters = request.body;
//     // alchemy_language.emotion(parameters, function (err, res) {
//     //     if (err)
//     //         console.log('error:', err);
//     //     else {
//     //         //     res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
//     //         //     res.write((JSON.stringify(response, null, 2)));
//     //         //     res.end();
//     //         //   }
//     //         // });
//     //         response.send(JSON.stringify(res.docEmotions, null, 2));
//     //     }
//     // });
//     response.send(request.body)
// });
//
// // app.post('/pabc', function(request, response) {
// //   response.send(request.params);
// // });
//
// app.listen(app.get('port'), function () {
//     console.log('Node app is running on port', app.get('port'));
// });



























var express = require('express');
var app = express();
var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
    api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
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

app.get('/abc', function(request, response) {

    alchemy_language.emotion(parameters, function (err, res) {
        if (err)
            console.log('error:', err);
        else {
            //     res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
            //     res.write((JSON.stringify(response, null, 2)));
            //     res.end();
            //   }
            // });
            response.send(JSON.stringify(res.docEmotions, null, 2));
        }

    });

    // app.post('/pabc', function (request, response) {
//     var parameters = request.body;
//     // alchemy_language.emotion(parameters, function (err, res) {
//     //     if (err)
//     //         console.log('error:', err);
//     //     else {
//     //         //     res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
//     //         //     res.write((JSON.stringify(response, null, 2)));
//     //         //     res.end();
//     //         //   }
//     //         // });
//     //         response.send(JSON.stringify(res.docEmotions, null, 2));
//     //     }
//     // });
//     response.send(request.body)
// });





    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });});


// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response) {
//     -  response.render('pages/index')
//     +  response.render('pages/index');
// });
//
// app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });
