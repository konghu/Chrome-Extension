
/**
 * Created by Kong on 10/29/2016.
 */
var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
    api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
})

var parameters = {
    url: 'http://www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
};

alchemy_language.emotion(parameters, function (err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
});