var http=require("http");
var server=http.createServer(function(req,res){
    if(req.url=="/abc"){
        //res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
        //res.write("你好啊!");

        var watson = require('watson-developer-cloud');
        var alchemy_language = watson.alchemy_language({
            api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
        });

        var parameters = {
            url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
        };

        alchemy_language.emotion(parameters, function (err, response) {
            if (err)
                console.log('error:', err);
            else {
                res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
                res.write((JSON.stringify(response, null, 2)));
                res.end();
            }
        });

    }
});

server.listen(1337,"localhost",function(){
    var watson = require('watson-developer-cloud');
    var alchemy_language = watson.alchemy_language({
        api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
    });

    var parameters = {
        url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
    };

    alchemy_language.emotion(parameters, function (err, response) {
        if (err)
            console.log('error:', err);
        else
            console.log(JSON.stringify(response, null, 2));

    });

});