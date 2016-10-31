// var content=document.getElementsByClassName("userContent");  // Find the elements
// var x = $(".userContent").find("p").first().html();
// var x = document.getElementsByClassName("userContent").getElementsByTagName("p");

var x = document.getElementsByTagName("p");

$(document).ready(function(){

    for(var i = 0; i < x.length; i++){

        $("<button class='icon' id='iconid"+i+"'>check</button>").insertAfter(x[i]);

    }
});


$(document).ready(function(){

    $(".icon").click(function(){

        // create boxes and append text to boxes
        order = parseInt(this.id.charAt(6));
        $("<div class='box' id='boxid"+order+"'>"+x[order].innerText+"</div>").insertAfter('#'+this.id+'');
    });
});

    var url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyD4rLhLb3ZmwjLJDt-njNqFYP30eHeaBTQ&target=en&q=";

    $(document).ready(function(){

        $(document).on("click", ".icon", function(){

            var order = parseInt(this.id.charAt(6));

            var content = x[order].innerText;
            $("#boxid"+order+"").append("<div id='translation-box"+order+"' style='background-color: lightblue; position:absolute; width:200px; height:100px'; </div>");

            // $("#translation-box"+order+"").append("<div class='emotionbox' id='emotionbox"+order+"' style='background-color: yellow; position:absolute; width:200px; height:100px'; </div>");

            // console.log(content);
            // $.get(url + content, function(data){
            //     console.log(data);
            //     $("#translation-box"+order+"").html(data.data.translations[0].translatedText);
            // });

            $.get("http://localhost:1337/abc", function(data){
                console.log(data);
                $("#translation-box"+order+"").html(JSON.docEmotions);
            })
        });
    });


// var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
//
// var alchemy_language = new AlchemyLanguageV1({
//     api_key: '09ef628a49a9e8fa40b423583d3dccdecbfa7232'
// });
//
// var params = {
//     url: 'http://www.huffingtonpost.com/2010/06/22/iphone-4-review-the-worst_n_620714.html'
// };
//
// alchemy_language.sentiment(params, function (err, response) {
//     if (err)
//         console.log('error:', err);
//     else
//         console.log(JSON.stringify(response, null, 2));
// });